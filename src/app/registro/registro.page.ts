import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formRegistro: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formRegistro = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }


  ngOnInit() {
  }

  salvarCadastro(){
    console.log('Formulário: ', this.formRegistro.valid);
  }
}
