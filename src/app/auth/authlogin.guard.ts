// src/app/auth/auth-guard.service.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { TokenStorageService } from './token-storage.service';
@Injectable()
export class AuthLoginGuardService implements CanActivate {
  info: any;

  constructor(public auth: AuthService, public router: Router,private tokenStorage: TokenStorageService) {}
  canActivate(): boolean {
    if (this.tokenStorage.getToken()) {
      this.info = this.tokenStorage.getAuthorities();
      if(this.info == 'ROLE_COLLABORATEUR'){
        this.router.navigate(['/collaborateur/menu']);
      }
        else{
          this.router.navigate(['/restaurant/dashboard']);
        }
      return false;
    } 
            return true; 
        
}
}