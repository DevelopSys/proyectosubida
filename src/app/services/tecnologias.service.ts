import { TecnologiaInterfaz } from './../utils/TecnologiaInterfaz';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TecnologiasService {

  tecnologias: TecnologiaInterfaz[] = [
    {nombre:"Java",imagen:"assets/images/news.jpg",aplicacion:"Multiplataforma"},
    {nombre:"JS",imagen:"",aplicacion:"Web"},
    {nombre:"MYSQL",imagen:"assets/images/news.jpg",aplicacion:"BD"},
    {nombre:"HTML",imagen:"assets/images/news.jpg",aplicacion:"BD"},
    {nombre:"CSS",imagen:"assets/images/news.jpg",aplicacion:"BD"},
    {nombre:"Python",imagen:"assets/images/news.jpg",aplicacion:"BD"},
    {nombre:"Powershell",imagen:"assets/images/news.jpg",aplicacion:"BD"},
    {nombre:"Angular",imagen:"assets/images/news.jpg",aplicacion:"BD"},
    {nombre:"XML",imagen:"assets/images/news.jpg",aplicacion:"BD"},
    {nombre:"PHP",imagen:"assets/images/news.jpg",aplicacion:"BD"}
  ]

  constructor() { }

  getAllTecnologias(): TecnologiaInterfaz[]  {
    return this.tecnologias;
  }

  getTecnologiasFiltradas(busqueda: string):TecnologiaInterfaz[]  {

    /*let arrayFiltrado: TecnologiaInterfaz[] = [];

    this.tecnologias.forEach(element => {
      if (element.nombre.toLowerCase().includes(busqueda.toLowerCase())){
        arrayFiltrado.push(element)
      }
    });*/

    return this.tecnologias.filter((elemento)=>{
      return elemento.nombre.toLowerCase()
      .includes(busqueda.toLowerCase())
    });
  }

}
