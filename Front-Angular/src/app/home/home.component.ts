import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  aluno = "Pedro Rodante";

  funcao1() {
    console.log("teste 1 válidado");
      $.post("http://localhost:3000/funcao1", {}, 
    (res) => {
      console.log("teste 2 válidado");
      res.send(res);
      console.log(res);
    });
  }

  funcao2(n1:string, n2:string) {
    console.log("teste 1 válidado");
      $.post("http://localhost:3000/funcao2", {
        "n1":n1,
        "n2":n2
      }, 
    (res) => {
      console.log("teste 2 válidado");
      res.send(res);
      console.log(res);
    });
  }
    
}