import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proceso-acceso',
  templateUrl: './proceso-acceso.component.html',
  styleUrls: ['./proceso-acceso.component.scss']
})
export class ProcesoAccesoComponent implements OnInit {
  ListUsuraios: any[] = [
    {
      id: 1,
      user: 'bob06',
      password: '123456'
    },
    {
      id: 2,
      user: 'eddieHs',
      password: '123456'
    }
  ];
  page: number = 1;
  size: number = 5;
  filter: string = '';
  pages: number = 1;
  total: number = 5;
  pageNum: number = 1;

  constructor(
    private readonly router: Router,
    //private readonly usuarioSvc: UsuarioService,
    private readonly toastSvc: ToastrService
  ) {}

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    const filters = {
      page: this.page,
      size: this.size,
      filter: this.filter,
    };

    /* this.usuarioSvc.list(filters).then((rpta) => {
      if (rpta?.data) {
        this.ListUsuraios = rpta?.data;
      }
    }); */
  }

  nextPage() {
    this.page++;
    this.listar();
  }
  prevPage() {
    this.page--;
    this.listar();
  }
  goPage(page = 1) {
    this.page = page;
    this.listar();
  }
  onChange() {
    this.page = 1;
    this.listar();
  }

  onAction(data: any) {
    if (data) {
      this.router.navigateByUrl('/proceso-acceso-action', { state: data });
    } else {
      this.router.navigateByUrl('/proceso-acceso-action');
    }
  }

  onDelete(form: any) {
    Swal.fire({
      title: `¿Estás seguro de eliminar al usuario ${form.user}?`,
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar'
    }).then((res) => {
      /* if(res.isConfirmed) {
        this.usuarioSvc.delete(form).then((res) => {
          console.log(res);
          this.toastSvc.success('Operación exitosa! Registro Eliminado Correctamente!');
          this.listar();
        });
      } */
    });
  }

  onClickImport() {
    let btn = document.querySelector('#import-data') as HTMLInputElement;
    btn.click();
  }

  onImportData(event: any) {
    let file = event.target.files[0];
    let form = new FormData();
    form.append('file', file);
    /* this.usuarioSvc.saveMassive(form).then((res) => {
      console.log(res);
      this.toastSvc.success('Bien Hecho! se importo correctamente!');
       this.listar();
     }); */
  }
}
