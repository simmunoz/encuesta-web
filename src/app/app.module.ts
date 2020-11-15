import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTES } from './app.routes';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { ServiceModule } from './services/service.module';

@NgModule({
  declarations: [
    AppComponent,
    EncuestaComponent,
     
  ],
  imports: [
    APP_ROUTES,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
