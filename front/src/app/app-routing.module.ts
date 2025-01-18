import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LitarAlumnoComponent } from "./components/litar-alumno/litar-alumno.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AlumnosComponent } from "./alumnos/alumnos.component";
import { DocentesComponent } from "./docentes/docentes.component";

const routes: Routes = [
   {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
   {path: 'dashboard', component: DashboardComponent},
   {path: 'alumnos', component: AlumnosComponent},
   {path: 'docentes', component: DocentesComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }