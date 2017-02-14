import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { ProgcursosComponent } from './progcursos.component';

const routes: Routes = [
  {
    path: '',
    component: ProgcursosComponent,
    data: {
      title: 'Programación de cursos'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgcursosRoutingModule {}
