import { Component } from "@angular/core";
import * as $ from "jquery";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  constructor(private http: HttpClient) {}

  aluno = "Pedro Rodante";
  n3: string | any;

  funcao1() {
    console.log("teste 1 válidado");
    let resposta = document.getElementById("resposta");
    let p = document.createElement("p");
    $.get("http://localhost:3000/funcao1", {}, (res) => {
      console.log("teste 2 válidado");
      console.log(res);
      p.textContent = res;
      resposta?.appendChild(p);
    });
  }
}
