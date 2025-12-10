
import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./componentes/home/home.component').then((m) => m.HomeComponent),
    data: { animation: 'HomePage' }
  },
  {
    path: 'sobre-mi',
    loadComponent: () =>
      import('./componentes/sobre-mi/sobre-mi.component').then(
        (m) => m.SobreMiComponent
      ),
    data: { animation: 'SobreMiPage' }
  },
  {
    path: 'skills',
    loadComponent: () =>
      import('./componentes/skills/skills.component').then(
        (m) => m.SkillsComponent
      ),
    data: { animation: 'SkillsPage' }
  },
  {
    path: 'proyectos',
    loadComponent: () =>
      import('./componentes/proyectos/proyectos.component').then(
        (m) => m.ProyectosComponent
      ),
    data: { animation: 'ProyectosPage' }
  },
  {
    path: 'experiencia',
    loadComponent: () =>
      import('./componentes/experiencia/experiencia.component').then(
        (m) => m.ExperienciaComponent
      ),
    data: { animation: 'ExperienciaPage' }
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./componentes/contacto/contacto.component').then(
        (m) => m.ContactoComponent
      ),
    data: { animation: 'ContactoPage' }
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
