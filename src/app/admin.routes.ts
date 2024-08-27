import { Routes } from '@angular/router';
import { AdminC1Component } from './component/admin-c1/admin-c1.component';
import { AdminC2Component } from './component/admin-c2/admin-c2.component';

// Lazy loading many routes at once
export const adminRoutes: Routes = [
  {
    path: 'admin1',
    component: AdminC1Component,
  },
  {
    path: 'admin2',
    component: AdminC2Component,
  },
];
