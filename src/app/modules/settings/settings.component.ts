import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/core/services/storage.service';
import { localStorageKeys } from 'src/app/core/constants/localstorage.constants';
import { SettingsService } from './services/settings.service';
import { ToasterService } from 'src/app/core/services/toaster.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  standalone: false,
})
export class SettingsComponent implements OnInit {
  distributor: any;
  locations: string[] = [];
  passwordForm: FormGroup;
  showNewPassword: boolean = false;
  showConfirmPassword: boolean = false;
  showOldPassword: boolean = false;
  loading: boolean = false;
  activeTab: string = 'distributor-info'; // 'distributor-info', 'change-password', 'invoices-details'
  oldPasswordVerified: boolean = false;

  constructor(
    private storageService: LocalStorageService,
    private fb: FormBuilder,
    private settingsService: SettingsService,
    private toasterService: ToasterService
  ) {
    this.passwordForm = this.fb.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    this.distributor = this.storageService.getItem(
      localStorageKeys.distributor
    );
    
    // Initialize locations - you can fetch from API or use distributor data
    if (this.distributor) {
      // Check if distributor has locations array
      if (this.distributor.locations && Array.isArray(this.distributor.locations)) {
        this.locations = this.distributor.locations;
      } 
      // Check if distributor has address fields that can be used as locations
      else if (this.distributor.distributor_address) {
        this.locations = [this.distributor.distributor_address, 'N/A'];
      }
      // Default fallback
      else {
        this.locations = ['Location 1', 'Location 2'];
      }
    } else {
      this.locations = ['Location 1', 'Location 2'];
    }

    // Disable new password fields initially until old password is verified
    this.passwordForm.get('newPassword')?.disable();
    this.passwordForm.get('confirmPassword')?.disable();
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const newPassword = formGroup.get('newPassword');
    const confirmPassword = formGroup.get('confirmPassword');
    
    if (newPassword && confirmPassword) {
      // Only validate if both fields are enabled and have values
      if (!newPassword.disabled && !confirmPassword.disabled) {
        if (newPassword.value && confirmPassword.value && newPassword.value !== confirmPassword.value) {
          confirmPassword.setErrors({ passwordMismatch: true });
          return { passwordMismatch: true };
        } else {
          const errors = confirmPassword.errors;
          if (errors) {
            delete errors['passwordMismatch'];
            confirmPassword.setErrors(Object.keys(errors).length > 0 ? errors : null);
          }
        }
      }
    }
    return null;
  }

  toggleNewPasswordVisibility(): void {
    this.showNewPassword = !this.showNewPassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  toggleOldPasswordVisibility(): void {
    this.showOldPassword = !this.showOldPassword;
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
    if (tab !== 'change-password') {
      // Reset password form when switching away from change password tab
      this.oldPasswordVerified = false;
      this.passwordForm.reset();
      // Disable new password fields
      this.passwordForm.get('newPassword')?.disable();
      this.passwordForm.get('confirmPassword')?.disable();
    }
  }

  verifyOldPassword(): void {
    const oldPassword = this.passwordForm.get('oldPassword')?.value;
    if (!oldPassword) {
      this.passwordForm.get('oldPassword')?.markAsTouched();
      return;
    }

    this.loading = true;
    // Call service to verify old password
    this.settingsService.verifyOldPassword(oldPassword).subscribe(
      (response) => {
        this.loading = false;
        this.oldPasswordVerified = true;
        // Enable new password fields and update validators
        const newPasswordControl = this.passwordForm.get('newPassword');
        const confirmPasswordControl = this.passwordForm.get('confirmPassword');
        
        if (newPasswordControl) {
          newPasswordControl.enable();
          newPasswordControl.setValidators([Validators.required, Validators.minLength(6)]);
          newPasswordControl.updateValueAndValidity();
        }
        
        if (confirmPasswordControl) {
          confirmPasswordControl.enable();
          confirmPasswordControl.setValidators([Validators.required]);
          confirmPasswordControl.updateValueAndValidity();
        }
        
        // Trigger password match validation
        this.passwordForm.updateValueAndValidity();
      },
      (error) => {
        this.loading = false;
        this.toasterService.showToaster({
          title: 'Error',
          message: 'Old password is incorrect. Please try again.',
          type: 'error'
        });
        this.passwordForm.get('oldPassword')?.setErrors({ incorrect: true });
        console.error('Password verification error:', error);
      }
    );
  }

  onChangePassword(): void {
    if (this.passwordForm.invalid) {
      // Mark all fields as touched to show validation errors
      Object.keys(this.passwordForm.controls).forEach(key => {
        this.passwordForm.get(key)?.markAsTouched();
      });
      return;
    }

    if (!this.oldPasswordVerified) {
      this.verifyOldPassword();
      return;
    }

    this.loading = true;
    const oldPassword = this.passwordForm.get('oldPassword')?.value;
    const newPassword = this.passwordForm.get('newPassword')?.value;
    
    // Call service to change password
    this.settingsService.changePassword(oldPassword, newPassword).subscribe(
      (response) => {
        this.loading = false;
        this.toasterService.showToaster({
          title: 'Success',
          message: 'Password changed successfully',
          type: 'success'
        });
        this.passwordForm.reset();
        this.oldPasswordVerified = false;
        // Disable new password fields until old password is verified again
        this.passwordForm.get('newPassword')?.disable();
        this.passwordForm.get('confirmPassword')?.disable();
      },
      (error) => {
        this.loading = false;
        this.toasterService.showToaster({
          title: 'Error',
          message: 'Failed to change password. Please try again.',
          type: 'error'
        });
        console.error('Password change error:', error);
      }
    );
  }

  get distributorName(): string {
    return this.distributor?.distributor_name || 'N/A';
  }
}

