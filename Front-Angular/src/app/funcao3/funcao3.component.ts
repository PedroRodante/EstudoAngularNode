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
  abrirPagina = "Teste";

  AbrirPagina() {
    console.log("teste 1 válidado");
    $.get("http://localhost:3000/funcao3", {}, (res) => {
      console.log("teste 2 válidado");
      console.log(res);
      this.abrirPagina = res;
    });
  }  
}
