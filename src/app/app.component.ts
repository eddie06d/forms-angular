import { AuthService } from './services/auth.service';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formularios';
  currentRoute: string;
  token!: string | null;

  constructor(
    private router: Router,
    private authSvc: AuthService
  ) {
    this.currentRoute = '/';
    this.token = '124';

    axios.interceptors.request.use(
      (config) => {
        if (this.token) {
          if (!config?.headers) {
            throw new Error(
              `config headers not to be undefined`
            );
          }
          config.headers['Authorization'] = 'Bearer ' + this.token;
        }
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );

    let vm = this;
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      function (error) {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          vm.authSvc.logout();
          return;
        }
      }
    );

    this.router.navigate([this.token ? '/dashboard' : '/login']);
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }
}
