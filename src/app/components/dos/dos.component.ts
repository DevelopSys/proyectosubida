import { TecnologiasService } from './../../services/tecnologias.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TecnologiaInterfaz } from 'src/app/utils/TecnologiaInterfaz';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.css']
})
export class DosComponent implements OnInit {

  apellido: string = '';
  tecnologias: TecnologiaInterfaz[] = [];

  constructor(private rutaActiva: ActivatedRoute, private servicio: TecnologiasService) { }

  ngOnInit(): void {
    //console.log(this.rutaActiva.snapshot.params.apellido);
    this.apellido = this.rutaActiva.snapshot.params.apellido;
    this.tecnologias = this.servicio.getAllTecnologias();
  }

}
