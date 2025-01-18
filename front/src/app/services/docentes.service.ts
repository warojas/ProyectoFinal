import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { docente } from '../models/docente';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DocentesService {

  private apiUrl = 'http://localhost:3000/api/docente';

  constructor(private http: HttpClient) { }

  getDocentes(): Observable<docente[]>{
    return this.http.get<docente[]>(this.apiUrl);
  }
  
  getDocente(id: number): Observable<docente>{
    return this.http.get<docente>(`${this.apiUrl}/${id}`);
  }

  createDocente(docente: docente): Observable<docente> {
    return this.http.post<docente>(this.apiUrl, docente);
  }

  updateUser(id: number, docente: docente): Observable<docente> {
    return this.http.put<docente>(`${this.apiUrl}/${id}`, docente);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
