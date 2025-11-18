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
  loading: boolean = false;

  constructor(
    private storageService: LocalStorageService,
    private fb: FormBuilder,
    private settingsService: SettingsService,
    private toasterService: ToasterService
  ) {
    this.passwordForm = this.fb.group({
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
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const newPassword = formGroup.get('newPassword');
    const confirmPassword = formGroup.get('confirmPassword');
    
    if (newPassword && confirmPassword) {
      if (newPassword.value !== confirmPassword.value) {
        confirmPassword.setErrors({ passwordMismatch: true });
      } else {
        confirmPassword.setErrors(null);
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

  onChangePassword(): void {
    if (this.passwordForm.invalid) {
      // Mark all fields as touched to show validation errors
      Object.keys(this.passwordForm.controls).forEach(key => {
        this.passwordForm.get(key)?.markAsTouched();
      });
      return;
    }

    this.loading = true;
    const newPassword = this.passwordForm.get('newPassword')?.value;
    
    // Call service to change password
    this.settingsService.changePassword(newPassword).subscribe(
      (response) => {
        this.loading = false;
        this.toasterService.showToaster({
          title: 'Success',
          message: 'Password changed successfully',
          type: 'success'
        });
        this.passwordForm.reset();
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

