import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {path: '' , loadComponent: () => import('./dashboard.component').then(mod => mod.DashboardComponent)},
  {path: 'me', loadComponent: () => import('../me/me.component').then(mod => mod.MeComponent)},
  {path: 'contact', loadComponent: () => import('../me/me.component').then(mod => mod.MeComponent)},
  // ...
];