import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LocalStorageService } from './core/services/storage.service';

import {
  inventorySubMenu,
  ordersSubMenu,
  paymentsSubMenu,
  primaryOrderSubMenu,
  reportsSubMenu,
  retailerSubMenu,
  salesmanSubMenu,
} from './core/constants/sub-nav.constants';
import { Toaster, ToasterService } from './core/services/toaster.service';
import { leftBarHidden } from './core/constants/no-left-bar.constants';
import { localStorageKeys } from './core/constants/localstorage.constants';
import { LoginService } from './modules/login/services/login.service';
import { GeneralDataService } from './modules/shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent implements OnInit {
  @ViewChild('subNav') subNav: ElementRef;
  permissions: any;
  isLoggedIn: boolean;
  isSideNavHidden: boolean;
  isMobileMenuOpen: boolean = false;
  isDarkMode: boolean = false;

  toastTitle: string;
  toastMessage: string;
  toastType: string;
  showToast: boolean;
  currentYear: number = new Date().getFullYear();
  selectedSubMenu: {
    title: string;
    subMenu: Array<{ title: string; link: string; icon: string }>;
  };

  constructor(
    private router: Router,
    private storageService: LocalStorageService,
    private toasterService: ToasterService // private generalDataService: GeneralDataService
  ) {
    this.isLoggedIn = this.storageService.getItem('dist_session')
      ? true
      : false;
    if (!this.isLoggedIn && !this.permissions) {
      this.router.navigateByUrl('/login');
    } else if (location.pathname === '/') {
      this.router.navigateByUrl('/home');
    }
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoggedIn = this.storageService.getItem('dist_session')
          ? true
          : false;
        const url = event.urlAfterRedirects;
        if (
          leftBarHidden.includes(url) ||
          url.includes('/orders/dispatch/') ||
          url.includes('/orders/execute-order/')
        ) {
          this.isSideNavHidden = true;
        } else {
          this.isSideNavHidden = false;
        }
      }
    });
    this.toasterHandler();
  }
  ngOnInit(): void {
    this.storageService.checkPermissions.subscribe(() => {
      this.permissions = this.storageService.getItem(
        localStorageKeys.permissions
      );
    });
    // Initialize dark mode from localStorage
    this.initDarkMode();
  }

  toasterHandler(): void {
    this.toasterService.getToast.subscribe((toast: Toaster) => {
      if (toast) {
        this.toastTitle = toast.title;
        this.toastMessage = toast.message;
        this.toastType = toast.type;
        this.showToast = true;
        setTimeout(() => {
          this.showToast = false;
        }, 5000);
      }
    });
  }

  openSubmenu(event: Event, selected: string): void {
    event.stopPropagation();
    switch (selected) {
      case 'primaryOrders':
        this.selectedSubMenu = primaryOrderSubMenu;
        break;
      case 'orders':
        this.selectedSubMenu = ordersSubMenu;
        break;
      case 'salesmen':
        this.selectedSubMenu = salesmanSubMenu;
        break;
      case 'inventory':
        this.selectedSubMenu = inventorySubMenu;
        break;
      case 'retailer':
        this.selectedSubMenu = retailerSubMenu;
        break;
      case 'reports':
        this.selectedSubMenu = reportsSubMenu;
        break;
      case 'payments':
        this.selectedSubMenu = paymentsSubMenu;
        break;
      default:
        break;
    }
    this.subNav.nativeElement.className = 'active';
    document.body.classList.add('no-scroll');
    document.getElementById('blureEffct').classList.add('blur-div');
    document
      .getElementsByClassName('overlay-blure')[0]
      .classList.add('d-block');
  }

  closeSubMenu(): void {
    if (this.subNav.nativeElement.className.includes('active')) {
      this.subNav.nativeElement.className = '';
      document.body.classList.remove('no-scroll');
      document.getElementById('blureEffct').classList.remove('blur-div');
      document
        .getElementsByClassName('overlay-blure')[0]
        .classList.remove('d-block');
    }
  }

  logout(): void {
    // Close mobile menu if open
    if (this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
    this.storageService.removeItem(localStorageKeys.session);
    this.storageService.removeItem(localStorageKeys.permissions);
    this.storageService.removeItem(localStorageKeys.distributor);
    this.storageService.removeItem(localStorageKeys.saleman);
    this.storageService.removeItem(localStorageKeys.actions);
    this.router.navigateByUrl('/login');
  }

  closeEverything(): void {
    const modal = document.querySelector('div.modal');
    if (modal) {
      const closeButton = modal.querySelector('button.close');
      (closeButton as HTMLButtonElement).click();
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    document.body.classList.remove('no-scroll');
  }

  initDarkMode(): void {
    const savedMode = this.storageService.getItem('darkMode');
    if (savedMode === 'true') {
      this.isDarkMode = true;
      document.documentElement.classList.add('dark');
    } else {
      this.isDarkMode = false;
      document.documentElement.classList.remove('dark');
    }
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
      this.storageService.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      this.storageService.setItem('darkMode', 'false');
    }
  }
}
