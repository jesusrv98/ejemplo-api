import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaResultadoComponent } from './components/tabla-resultado/tabla-resultado.component';
import { InfoUsuarioComponent } from './components/info-usuario/info-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaResultadoComponent,
    InfoUsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
