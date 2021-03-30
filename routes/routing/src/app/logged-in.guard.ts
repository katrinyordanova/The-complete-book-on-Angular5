import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
    isLoggedIn: boolean;
    constructor(private authService: AuthService) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        const loggedIn = this.authService.isLoggedIn();
        console.log('canActivate', this.isLoggedIn);
        return loggedIn;
    }
}