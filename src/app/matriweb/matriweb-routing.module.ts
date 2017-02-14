import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { MatriwebComponent } from './matriweb.component';

const routes: Routes = [
  {
    path: '',
    component: MatriwebComponent,
    data: {
      title: 'Matrícula web'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatriwebRoutingModule {}
