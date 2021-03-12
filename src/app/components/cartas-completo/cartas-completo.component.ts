import { TecnologiaInterfaz } from './../../utils/TecnologiaInterfaz';
import { TecnologiasService } from './../../services/tecnologias.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartas-completo',
  templateUrl: './cartas-completo.component.html',
  styleUrls: ['./cartas-completo.component.css']
})
export class CartasCompletoComponent implements OnInit {

  tecnologias: TecnologiaInterfaz[] = [];

  constructor(private servicioDatos: TecnologiasService) { }

  ngOnInit(): void {
    // Tecnologias[]
    this.tecnologias = this.servicioDatos.getAllTecnologias();
  }

  buscarTecnologia(busqueda: string){
    //console.log(busqueda);
    this.tecnologias = this.servicioDatos.getTecnologiasFiltradas(busqueda);
  }

}
