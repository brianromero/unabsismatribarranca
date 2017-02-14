import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ProgcursosComponent } from './progcursos.component';
import { ProgcursosRoutingModule } from './progcursos-routing.module';

@NgModule({
  imports: [
    ProgcursosRoutingModule,
    ChartsModule
  ],
  declarations: [ ProgcursosComponent ]
})
export class ProgcursosModule { }
