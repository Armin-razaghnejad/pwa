import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {path: '' , loadComponent: () => import('./main.component').then(mod => mod.MainComponent),children:[
    {path: '' , loadComponent: () => import('./dashboard.component').then(mod => mod.DashboardComponent)},
    {path: 'me', loadComponent: () => import('../me/me.component').then(mod => mod.MeComponent)},
    {path: 'contact', loadComponent: () => import('../contanct-me/contact.component').then(mod => mod.ContactComponent)},
    {path: 'donate', loadComponent: () => import('../donate/donate.component').then(mod => mod.DonateComponent)},
  ]},
];