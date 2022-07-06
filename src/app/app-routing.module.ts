import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login', loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'proceso-electoral',
    loadChildren: () =>
      import('./pages/proceso-electoral/proceso-electoral.module').then(
        (m) => m.ProcesoElectoralModule
      ),
  },
  {
    path: 'proceso-electoral-action' , loadChildren: () => import('./pages/proceso-electoral/nuevo/nuevo.module').then(m => m.NuevoModule)
   , data:{}
  },
  {
    path: 'proceso-acceso',
    loadChildren: () =>
      import('./pages/proceso-acceso/proceso-acceso.module').then(
        (m) => m.ProcesoAccesoModule
      ),
  },
  {
    path: 'proceso-acceso-action' , loadChildren: () => import('./pages/proceso-acceso/update/update.module').then(m => m.UpdateModule)
   , data:{}
  },
 /*  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }, */
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
