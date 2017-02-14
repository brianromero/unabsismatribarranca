import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { InicioComponent } from './inicio.component';
import { InicioRoutingModule } from './inicio-routing.module';

@NgModule({
  imports: [
    InicioRoutingModule,
    ChartsModule
  ],
  declarations: [ InicioComponent ]
})
export class InicioModule { }
