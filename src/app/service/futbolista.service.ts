// futbolista.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { Futbolistas } from '../model/futbolistas';

@Injectable({
  providedIn: 'root'
})
export class FutbolistasService {
  private baseUrl = `${environment.base}/futbolistas`;

  constructor(private http: HttpClient) { }

  list(): Observable<Futbolistas[]> {
    return this.http.get<Futbolistas[]>(this.baseUrl);
  }

  getById(id: number): Observable<Futbolistas> {
    return this.http.get<Futbolistas>(`${this.baseUrl}/${id}`);
  }

  // Puedes agregar métodos adicionales según las operaciones CRUD necesarias
}
