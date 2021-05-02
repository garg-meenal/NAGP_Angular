import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      if (localStorage.getItem('isUserLoggedIn') !== 'yes'){
        this.router.navigate(['/login'], { queryParams: { redirectURL: state.url }});
        return false;
      }
      return true;
  }

}
