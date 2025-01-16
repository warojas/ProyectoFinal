import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LitarAlumnoComponent } from "./components/litar-alumno/litar-alumno.component";

const routes: Routes = [
   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }