import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitarAlumnoComponent } from './litar-alumno.component';

describe('LitarAlumnoComponent', () => {
  let component: LitarAlumnoComponent;
  let fixture: ComponentFixture<LitarAlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LitarAlumnoComponent]
    });
    fixture = TestBed.createComponent(LitarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
