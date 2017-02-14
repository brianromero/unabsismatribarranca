import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { MatriwebComponent } from './matriweb.component';
import { MatriwebRoutingModule } from './matriweb-routing.module';

@NgModule({
  imports: [
    MatriwebRoutingModule,
    ChartsModule
  ],
  declarations: [ MatriwebComponent ]
})
export class MatriwebModule { }
