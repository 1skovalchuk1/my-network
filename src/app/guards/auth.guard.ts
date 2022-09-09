import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { iif, observable, Observable, of } from "rxjs";
import { AuthService } from "../services/auth/auth.service";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, 
              state: RouterStateSnapshot): boolean |
                                           UrlTree |
                                           Observable<boolean | UrlTree> |
                                           Promise<boolean | UrlTree> {
    return this.auth.isAuthenticated().then((isAuth) => {
      if (isAuth) {
        return true
      } else {
        return this.router.navigate( ['/'], { queryParams: {auth: false} })
      }
    })
  }

}