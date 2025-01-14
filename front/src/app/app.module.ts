import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LitarAlumnoComponent } from './components/litar-alumno/litar-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    LitarAlumnoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
