import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(credentials: any): Promise<any> {
    return new Promise((resolve, reject) => resolve('ok'));
  }

  logout() {

  }
}
