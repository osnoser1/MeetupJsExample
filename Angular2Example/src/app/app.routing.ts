import { Routes, RouterModule } from '@angular/router';

import { LibrosComponent } from './libros/libros.component';
import { LibroDetallesComponent } from './libros/libro-detalles/libro-detalles.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'libros',
        component: LibrosComponent
    },
    {
        path: 'libros/:id',
        component: LibroDetallesComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);