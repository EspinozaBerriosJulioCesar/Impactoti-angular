import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-incidencia',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro-incidencia.html',
  styleUrl: './registro-incidencia.css'
})
export class RegistroIncidencia {
  private fb = inject(FormBuilder);
  mensajeExito = false;

  incidenciaForm = this.fb.group({
    responsable: ['', [Validators.required, Validators.minLength(3)]],
    correo: ['', [Validators.required, Validators.email]],
    tienda: ['', Validators.required],
    equipo: ['', Validators.required],
    descripcion: ['', [Validators.required, Validators.minLength(10)]]
  });

  registrar(): void {
    this.mensajeExito = false;

    if (this.incidenciaForm.invalid) {
      this.incidenciaForm.markAllAsTouched();
      return;
    }

    this.mensajeExito = true;
    this.incidenciaForm.reset();
  }
}
