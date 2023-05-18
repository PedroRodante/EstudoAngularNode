import { Component } from '@angular/core';
import * as $ from 'jquery' ;
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-funcao2',
  templateUrl: './funcao2.component.html',
  styleUrls: ['./funcao2.component.css']
})
export class Funcao2Component {

  constructor(private http: HttpClient) { }

  funcao2(n1:string, n2:string) {
    console.log("teste 1 válidado");
    let resposta = document.getElementById("resposta");
    let resposta2 = document.getElementById("resposta2");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    $.post("http://localhost:3000/funcao2", {
        "n1":n1,
        "n2":n2
      },  (res) => {
        console.log("teste 2 válidado");
        console.log(res);
        p.textContent = res;
        if(p.textContent === res){
          p2.textContent = "Isso já daria um 9,5 em? Mas ainda tem mais...";
          resposta2?.appendChild(p2);
          }
        resposta?.appendChild(p);
    });
  }

}
