import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaComponent } from './agenda/agenda.component';
import { AgendaListComponent } from './agenda-list/agenda-list.component';

@NgModule({
  declarations: [
    AgendaComponent,
    AgendaListComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    AgendaRoutingModule,
  ]
})
export class AgendaModule { }
