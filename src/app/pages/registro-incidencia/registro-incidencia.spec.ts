import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroIncidencia } from './registro-incidencia';

describe('RegistroIncidencia', () => {
  let component: RegistroIncidencia;
  let fixture: ComponentFixture<RegistroIncidencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroIncidencia]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroIncidencia);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('debe crear correctamente el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debe considerar invalido el formulario vacio', () => {
    expect(component.incidenciaForm.invalid).toBe(true);
  });

  it('debe rechazar un correo electronico incorrecto', () => {
    const control = component.incidenciaForm.controls.correo;

    control.setValue('correo-incorrecto');
    expect(control.hasError('email')).toBe(true);
  });

  it('debe rechazar una descripcion menor a 10 caracteres', () => {
    const control = component.incidenciaForm.controls.descripcion;

    control.setValue('Problema');
    expect(control.hasError('minlength')).toBe(true);
  });

  it('debe rechazar un nombre menor a 3 caracteres', () => {
    const control = component.incidenciaForm.controls.responsable;

    control.setValue('Jo');
    expect(control.hasError('minlength')).toBe(true);
  });

  it('debe aceptar los datos correctos y registrar la incidencia', () => {
    component.incidenciaForm.setValue({
      responsable: 'Julio Espinoza',
      correo: 'julio@correo.com',
      tienda: 'Tottus Lima',
      equipo: 'POS',
      descripcion: 'El terminal POS no funciona correctamente'
    });

    expect(component.incidenciaForm.valid).toBe(true);

    component.registrar();

    expect(component.mensajeExito).toBe(true);
  });
});
