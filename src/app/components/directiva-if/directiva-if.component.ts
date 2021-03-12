import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-if',
  templateUrl: './directiva-if.component.html',
  styleUrls: ['./directiva-if.component.css']
})
export class DirectivaIfComponent implements OnInit {


  textoBoton: string = "Ver Login"
  variableMostrar: boolean = true;
  variabloMostrarNumero: number = 3;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarValor(){
    this.variableMostrar = !this.variableMostrar
    if (this.variableMostrar){
      this.textoBoton = "Ver Registro"
    } else {
      this.textoBoton = "Ver Login"
    }
  }

  cambiarValorInput(valor: string){
    this. variabloMostrarNumero = parseInt(valor);
  }

}
