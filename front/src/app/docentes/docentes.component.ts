import { Component, OnInit } from '@angular/core';
import { docente } from 'src/app/models/docente';
import { DocentesService } from '../services/docentes.service';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit{

  docentes: docente[] = [];

  constructor(private docenteService: DocentesService){}
    ngOnInit(): void{
      this.loadDocentes();
    }

    loadDocentes(): void{
      this.docenteService.getDocentes().subscribe(
        (docentes) => this.docentes = docentes,
        (error) => console.error('Error loading docentes', error)
      );
    }
}
