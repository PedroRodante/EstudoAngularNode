import { Component } from "@angular/core";
import * as $ from "jquery";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-funcao3",
  templateUrl: "./funcao3.component.html",
  styleUrls: ["./funcao3.component.css"],
})
export class Funcao3Component {
  constructor(private http: HttpClient) {}

  AbrirPagina() {
    console.log("teste 1 válidado");
    let resposta = document.getElementById("resposta");
    let p = document.createElement("p");
    $.get("http://localhost:3000/funcao3", {}, (res) => {
      console.log("teste 2 válidado");
      console.log(res);
      p.textContent = res;
      resposta?.appendChild(p);
    });
  }  

  Delete(){
    console.log("teste 1 válidado");
    let resposta2 = document.getElementById("resposta2");
    let resposta3 = document.getElementById("resposta3")
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    $.post("http://localhost:3000/funcao3", {}, (res) => {
      console.log("teste 2 válidado");
      console.log(res);
      p.textContent = res;
      if(p.textContent === res){
      p2.textContent = "E A NOTA DO PEDRO É 10!!";
      resposta3?.appendChild(p2);
      }
      resposta2?.appendChild(p);
    });
  }  
}

