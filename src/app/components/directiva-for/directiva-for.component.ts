import { TecnologiaInterfaz } from './../../utils/TecnologiaInterfaz';
import { Component, OnInit } from '@angular/core';
import { Tecnologia } from 'src/app/utils/Tecnologia';

@Component({
  selector: 'app-directiva-for',
  templateUrl: './directiva-for.component.html',
  styleUrls: ['./directiva-for.component.css']
})
export class DirectivaForComponent implements OnInit {

  conocimientos: string[] = ['Java','Angular','MySQL','PHP','JS','TypeScript','Python','HTML','CSS', 'Powershell', 'JavaFX','C#','.NET']
  /*tecnologia1: Tecnologia = new Tecnologia("Java","assets/images/news.jpg","Multiplataforma");
  tecnologia2: Tecnologia = new Tecnologia("JS","assets/images/angular.png","Multiplataforma");
  tecnologia3: Tecnologia = new Tecnologia("MySQL","assets/images/news.jpg","Multiplataforma");
  tecnologiasObjetos: Tecnologia[] = [this.tecnologia1,this.tecnologia2,this.tecnologia3];*/

  tecnologiasObjetos: TecnologiaInterfaz[] = [
    {nombre:"Java",imagen:"assets/images/news.jpg",aplicacion:"Multiplataforma"},
    {nombre:"JS",imagen:"",aplicacion:"Web"},
    {nombre:"MYSQL",imagen:"assets/images/news.jpg",aplicacion:"BD"}
  ]

  constructor() { }

  ngOnInit(): void {
    
  }

}
