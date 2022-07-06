import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

export interface OptionsForm {
  id: string;
  label: string;
}

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  formulario!: FormGroup;
  @Input() options!: OptionsForm;
  id: number = 0;
  user: string = '';
  password: string = '';

  constructor(
    //private readonly usuarioSvc: UsuarioService,
    private readonly router: Router,
    private readonly toastSvc: ToastrService,
    private readonly fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {

    if(history.state){
      this.formEdit();
    }else{
      this.initForm();
    }
  }


  async onStore(): Promise<void> {

    if (this.formulario.status == 'VALID') {
      try {
        if(this.id){
          this.update({
            id: this.id,
            user: this.formulario.value.user,
            password: this.formulario.value.password,
          })
        }else{
          this.save({
            user: this.formulario.value.user,
            password: this.formulario.value.password,
          })
        }

      } catch (error) {
        this.toastSvc.error('Ocurrio un Error!');
      } finally {
      }

    } else {
      this.toastSvc.info('Los campos son requeridos', 'Info');
    }

  }

  async update(form: any){
    /* return await this.usuarioSvc.update(form).then((res) => {
      if (res.data.success) {
        this.toastSvc.success('Bien Hecho! Registro Grabado Correctamente!');
        this.router.navigate(['/operadores-registro']);
      } else {
        this.toastSvc.info('Intentelo Nuevamente!', 'Info');
      }
    }); */
  }


  async save(form: any){
    /* return await this.usuarioSvc.save(form).then((res) => {
      if (res.data.success) {
        this.toastSvc.success('Bien Hecho! Registro Grabado Correctamente!');
        this.router.navigate(['/operadores-registro']);
      } else {
        this.toastSvc.info('Intentelo Nuevamente!', 'Info');
      }
    }); */
  }

  private formEdit(): void {
    this.formulario = this.fb.group({
      id: [0, Validators.required],
      user: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.id = history.state.id
    this.user = history.state.user
    this.password = history.state.password
    this.formulario.controls['user'].setValue(this.user);
    this.formulario.controls['password'].setValue(this.password);
  }

  private initForm(): void {
    this.formulario = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
