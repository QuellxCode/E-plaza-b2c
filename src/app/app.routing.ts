import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }, {
    path: '',
    component: Admin-LayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/adminlayout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: 'home',
    component: HomeLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/home-layout/home-layout.module#HomeLayoutModule'
  }]},

  {
    path: '**',
    redirectTo: 'dashboard'
  }
]
