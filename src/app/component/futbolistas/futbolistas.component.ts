// futbolistas.component.ts

import { Component, OnInit } from '@angular/core';
import { FutbolistasService } from '../../service/futbolista.service';
import { Futbolistas } from '../../model/futbolistas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-futbolistas',
  templateUrl: './futbolistas.component.html',
  styleUrls: ['./futbolistas.component.css']
})
export class FutbolistasComponent implements OnInit {
  futbolistas: Futbolistas[] = [];
  futbolistaEncontrado: Futbolistas | undefined;
  idBusqueda: number | undefined;

  constructor(private futbolistasService: FutbolistasService,private router: Router) { }

  ngOnInit(): void {
    this.listarFutbolistas();
  }

  listarFutbolistas(): void {
    this.futbolistasService.list().subscribe(data => {
      this.futbolistas = data;
      this.futbolistaEncontrado = undefined; // Limpiar el futbolista encontrado al cargar la lista
    });
  }

  buscarPorId(): void {
    if (this.idBusqueda) {
      this.futbolistasService.getById(this.idBusqueda).subscribe(
        data => {
          this.futbolistaEncontrado = data;
          this.futbolistas = []; // Vaciar la lista de futbolistas si se muestra una lista
        },
        error => {
          console.error('Error al buscar por ID:', error);
          // Puedes manejar el error aquí según tus necesidades (ej. mostrar un mensaje de error)
        }
      );
    }
  }
  volver(): void {
    location.reload();
  }
}
