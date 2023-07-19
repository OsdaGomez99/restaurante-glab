import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      group: this.formBuilder.group({
        nombres: ['', Validators.required],
        apellidos: ['', Validators.required],
        tipo_doc: ['', Validators.required],
        numero_doc: ['', Validators.required],
        email: ['', Validators.required],
        fecha: ['', Validators.required],
        tipo_reserva: ['', Validators.required],
        personas: ['', Validators.required],
        descripcion: [''],
      }),
    });
  }

  onSubmit() {
    if (this.myForm.invalid) {
      return;
    }

    // El formulario es válido, realiza las acciones correspondientes
    console.log('¡El formulario es válido!');
    // Otras acciones...
  }

}
