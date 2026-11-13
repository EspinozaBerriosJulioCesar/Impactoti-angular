import { Routes } from '@angular/router';
import { RegistroIncidencia } from './pages/registro-incidencia/registro-incidencia';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'registro',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    component: RegistroIncidencia
  },
  {
    path: '**',
    redirectTo: 'registro'
  }
];
