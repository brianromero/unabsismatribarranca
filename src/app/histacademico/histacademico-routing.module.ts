import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { HistacademicoComponent } from './histacademico.component';

const routes: Routes = [
  {
    path: '',
    component: HistacademicoComponent,
    data: {
      title: 'Historial académico'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistacademicoRoutingModule {}
