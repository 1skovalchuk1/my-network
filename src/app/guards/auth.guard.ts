import { Injectable } from "@angular/core";
import { CanActivate, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  isAuth = false;

  constructor() {}

  canActivate(): boolean |
                 UrlTree |
                 Observable<boolean | UrlTree> |
                 Promise<boolean | UrlTree> {
    // return this.store.pipe(
    //   select(selectUserIsAuth),
    //   switchMap((isAuth) => {
    //     if (isAuth) {
    //       return of(true)
    //     }
    //     return of(false)
    //   })
    // )
    return true
  }
}