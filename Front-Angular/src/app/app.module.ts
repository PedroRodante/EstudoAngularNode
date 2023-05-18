import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { Funcao2Component } from './funcao2/funcao2.component';
import { Funcao3Component } from './funcao3/funcao3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Funcao2Component,
    Funcao3Component,
  ],
  exports: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
