import { Component } from '@angular/core';
import { Cadastro } from '../models/Cadastro';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listaCadastro: Cadastro[] = [];

  constructor(private storageService: StorageService) {}

  async buscarCadastro(){
    this.listaCadastro = await this.storageService.getAll();
  }

  ionViewDidEnter() {
    this.buscarCadastro();
  }
}
