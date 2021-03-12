import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-switch',
  templateUrl: './directiva-switch.component.html',
  styleUrls: ['./directiva-switch.component.css']
})
export class DirectivaSwitchComponent implements OnInit {

  numero: number = 3;
  constructor() { }

  ngOnInit(): void {
  }

  cambioInput(param: string){
    //console.log(event.target);
    this.numero = parseInt(param);
    
  }

}
