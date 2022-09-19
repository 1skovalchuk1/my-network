import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable, of, switchMap } from "rxjs";
import { selectUserIsAuth } from "../store/selectors/user.selectors";
import { IAppState } from "../store/states/app.state";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  isAuth = false;

  constructor(
    private store: Store<IAppState>,
    private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean |
                                           UrlTree |
                                           Observable<boolean | UrlTree> |
                                           Promise<boolean | UrlTree> {
    return this.store.pipe(
      select(selectUserIsAuth),
      switchMap((isAuth) => {
        if (isAuth) {
          return of(true)
        }
        this.router.navigate( ['/'] )
        return of(false)
      })
    )
  }
}