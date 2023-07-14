import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadComponent: () => import('./components/welcome/welcome.component').then(mod => mod.WelcomeComponent),
  },
  {
    path: 'app', loadChildren: () => import('./components/dashboard/dashboard-routing.module').then(mod => mod.ROUTES)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
