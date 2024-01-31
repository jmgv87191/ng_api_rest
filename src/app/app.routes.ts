import { Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { EditarComponent } from './vistas/editar/editar.component';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';

export const routes: Routes = [
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'editar',
        component: EditarComponent
    },
    {
        path:'dashboard',
        component: DashboardComponent
    },
    {
        path:'nuevo',
        component: NuevoComponent
    }
];
