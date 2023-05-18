import { NgModule,  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Funcao2Component } from './funcao2/funcao2.component';
import { Funcao3Component } from './funcao3/funcao3.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'funcao2', component: Funcao2Component },
  { path: 'funcao3', component: Funcao3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  
}
