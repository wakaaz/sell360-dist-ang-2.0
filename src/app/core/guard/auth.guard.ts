import { Injectable, Inject } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot} from '@angular/router';
import { LocalStorageService } from '../services/storage.service';


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(
    @Inject(LocalStorageService) private storageService: LocalStorageService,
    @Inject(Router) private router: Router
  ) {}

  /**
   * Can this route be activated?
   * @param ActivatedRouteSnapshot route - The route.
   * @returns true if user is authenticated otherwise false
   */
  public canActivate(route: ActivatedRouteSnapshot): boolean {
    const token = this.storageService.getItem('dist_session');
    const distributor = this.storageService.getItem('distributor');
    return token !== null && distributor !== null;
  }

}
