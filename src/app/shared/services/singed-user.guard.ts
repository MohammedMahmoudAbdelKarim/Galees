import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingedUserGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.isAuthinticated().then((authenticated: string) => {
      if (authenticated == "true") {
        return true;
      } else {
        this.router.navigate(['/login'])
      }
    }
    );
  }
}