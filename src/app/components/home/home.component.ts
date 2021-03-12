import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ruta: Router) { }

  ngOnInit(): void {
  }

  pasoParametros(parametro: string, parametroDos: string){
      this.ruta.navigate([parametroDos,parametro])
  }


}
