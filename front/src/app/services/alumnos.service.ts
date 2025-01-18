import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { alumno } from '../models/alumno';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private apiUrl = 'http://localhost:3000/api/estudiantes';

  constructor(private http: HttpClient) { }

  getAlumnos(): Observable<alumno[]>{
    return this.http.get<alumno[]>(this.apiUrl);
  }

  getAlumno(id: number): Observable<alumno>{
    return this.http.get<alumno>(`${this.apiUrl}/${id}`);
  }

}
