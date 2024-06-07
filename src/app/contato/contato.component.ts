import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,
    NgIf,
  ],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']  // Corrected to styleUrls
})
export class ContatoComponent {

  constructor(
    private fb: FormBuilder
  ){}

  formContato = this.fb.group({
    nome: ["", [
      Validators.minLength(4),
      Validators.required,
    ]],
    assunto: ["", [
      Validators.minLength(10),
      Validators.required
    ]],
    telefone: ["", [
      Validators.minLength(11),
      Validators.required
    ]],
    email: ["", [
      Validators.email,
      Validators.required
    ]],
    mensagem: ["", [
      Validators.minLength(20),
      Validators.required
    ]]
  });

  enviarFormulario(){
    alert("Formulario enviado");
    this.formContato.reset();
  }

}
