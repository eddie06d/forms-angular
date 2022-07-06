import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

export interface OptionsForm {
  id: string;
  label: string;
}
export interface UserCredentials {
  user: string;
  password: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  authForm!: FormGroup;
  //signIn = ACTIONS.signIn;
  @Input() options!: OptionsForm;

  constructor(
    private readonly authSvc: AuthService,
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly toastSvc: ToastrService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  async onSubmit(): Promise<void> {
    if (this.authForm.status == 'VALID') {
      const credentials: UserCredentials = {
        user: this.authForm.value.email,
        password: this.authForm.value.password,
      };

      try {
        await this.authSvc.login(credentials).then((res) => {
          if (res.data.success) {
            this.toastSvc.success('Bien Hecho! Bienvenido(a)!');
            this.redirectUser()
          } else {
            this.toastSvc.info('Credenciales Incorrectas!', 'Info');
          }
          console.log(res.data);
        });
      } catch (error) {
        this.toastSvc.error('Ocurrio un Error!');
      } finally {
      }

    } else {
      this.toastSvc.info('Los campos son requeridos', 'Info');
    }
  }

  private initForm(): void {
    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  private redirectUser(): void {
    //this.router.navigate(['/dashboard']);
    window.location.assign("/dashboard")
  }

  onLogin(): void {
    this.router.navigate(['/dashboard']);
  }

}
