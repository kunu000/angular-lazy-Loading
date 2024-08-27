import { Routes } from '@angular/router';
import { Defer1Component } from './component/defer1/defer1.component';
import { C1Component } from './component/c1/c1.component';
import { C2Component } from './component/c2/c2.component';
import { AdminC1Component } from './component/admin-c1/admin-c1.component';
import { AdminC2Component } from './component/admin-c2/admin-c2.component';
import { NavbarComponent } from './component/navbar/navbar.component';

// Go line wise

export const routes: Routes = [
  { path: '', redirectTo: 'defer-loading', pathMatch: 'full' },
  {
    path: '',
    component: NavbarComponent,
    children: [
      { path: 'defer-loading', component: Defer1Component },
      // Lazy loading a standalone component
      {
        path: 'c1',
        loadComponent: () =>
          import('../app/component/c1/c1.component').then(
            (mod) => mod.C1Component
          ),
      },
      {
        path: 'c2',
        loadComponent: () =>
          import('../app/component/c2/c2.component').then(
            (mod) => mod.C2Component
          ),
      },
    ],
  },
  // Lazy loading many routes at once
  {
    path: '',
    loadChildren: () =>
      import('../app/admin.routes').then((mod) => mod.adminRoutes),
  },
];
