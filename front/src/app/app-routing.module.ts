import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LitarAlumnoComponent } from "./components/litar-alumno/litar-alumno.component";

const routes: Routes = [
    { path: '', component: LitarAlumnoComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }