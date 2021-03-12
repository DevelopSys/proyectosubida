import { TecnologiaInterfaz } from './../../utils/TecnologiaInterfaz';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  @Input() datoCarta:TecnologiaInterfaz | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
