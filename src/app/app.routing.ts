import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Inicio'
    },
    children: [
      {
        path: 'matriweb',
        loadChildren: './matriweb/matriweb.module#MatriwebModule'
      },
      {
        path: 'progcursos',
        loadChildren: './progcursos/progcursos.module#ProgcursosModule'
      },
      {
        path: 'histacademico',
        loadChildren: './histacademico/histacademico.module#HistacademicoModule'
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
