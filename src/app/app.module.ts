import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PacienteService } from './paciente/paciente.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    LocalNotifications,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy,},
    PacienteService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// ...