import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  formCadastro: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formCadastro = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      descricao: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
      validade: ['', Validators.compose([Validators.required, Validators.maxLength(8)])],
      preco: ['', Validators.compose([Validators.required, Validators.maxLength(8)])]
    });
  }

  ngOnInit() {
  }

  salvarCadastro(){
    console.log('Formulário: ', this.formCadastro.valid);
  }

}
