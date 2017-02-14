import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { HistacademicoComponent } from './histacademico.component';
import { HistacademicoRoutingModule } from './histacademico-routing.module';

@NgModule({
  imports: [
    HistacademicoRoutingModule,
    ChartsModule
  ],
  declarations: [ HistacademicoComponent ]
})
export class HistacademicoModule { }
