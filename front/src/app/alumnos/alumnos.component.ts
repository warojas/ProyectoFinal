import { Component, OnInit } from '@angular/core';
import { alumno } from 'src/app/models/alumno';
import { AlumnosService } from '../services/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  alumnos: alumno[] = [];

  constructor(private alumnosService: AlumnosService){}

  ngOnInit(): void {
    this.loadAlumnos();
  }

  loadAlumnos(): void{
    this.alumnosService.getAlumnos().subscribe(
      (alumnos) => this.alumnos = alumnos,
      (error) => console.error('Error loading alumnos', error)
    );
  }
 

}
