import { Component, ElementRef, OnInit, Renderer2, ViewChild, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { Identifiers } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { Opcao, ListComponent } from './list/list.component';


export class Cliente {
  nome: string = '';
  tipo: number = 1;
  genero: number = 1;
  dataNascimento: Date = null;
  observacao: string = '';
  inativo: boolean = false;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'avatar-otimiza';
  formAvatar: FormGroup;
  model = {
    estilo: 'Circle',
    cabelo: 'NoHair',
    acessorios: 'Blank',
    corcabelo: 'Blank',
    barba: 'Blank',
    corbarba:'Brown',
    roupa: 'BlazerShirt',
    corroupa: 'Black',
    olhos: 'Default',
    sombra: 'Default',
    boca: 'Smile',
    cor: 'Light',
    departamento: 'Administrativo',
    name : ''
  }
  url
  urlChanger = new Subject<Opcao>();
  subsUrlChanger: Subscription;
  opcao = new Opcao(0, 0, "", "");
  listCabelos = this.list.listCabelos
  listEstilo = this.list.listEstilo
  listAcessorios = this.list.listAcessorios
  listCoresCabelo = this.list.listCorCabelo
  listBarbas = this.list.listBarba
  listCoresBarba = this.list.listCorBarba
  listRoupa = this.list.listRoupa
  listCoresRoupa = this.list.listCorRoupa
  listOlhos = this.list.listOlhos
  listSombrancelha = this.list.listSombrancelha
  listBocas = this.list.listBocas
  listCor = this.list.listCor
  listDepartamento = this.list.listDepartamento

  readonly apiURL: string;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private list: ListComponent) {

    this.apiURL = 'http://localhost:54130/';

  }
  ngOnInit() {
    this.url = 'https://avataaars.io/?avatarStyle=' + this.model.estilo +
      '&topType=' + this.model.cabelo +
      '&accessoriesType=' + this.model.acessorios +
      '&hairColor=' + this.model.corcabelo +
      '&facialHairType=' + this.model.barba +
      '&facialHairColor=' + this.model.corbarba +
      '&clotheType=' + this.model.roupa +
      '&clotheColor='+ this.model.corroupa +
      '&eyeType=' + this.model.olhos +
      '&eyebrowType=' + this.model.sombra +
      '&mouthType=' + this.model.boca +
      '&skinColor=' + this.model.cor

    this.subsUrlChanger = this.urlChanger.subscribe((respose) => {
      console.log(respose.idItem, "respose.iditem")
      switch (respose.idItem) {
        case 1:
          console.log(respose.nome, "entrou case 1");
          this.url = 'https://avataaars.io/?avatarStyle=' + this.model.estilo +
            '&topType=' + this.model.cabelo +
            '&accessoriesType='+ this.model.acessorios +
            '&hairColor='+ this.model.corcabelo +
            '&facialHairType='+ this.model.barba +
            '&facialHairColor='+ this.model.corbarba +
            '&clotheType=' + this.model.roupa +
            '&clotheColor='+ this.model.corroupa +
            '&eyeType=' + this.model.olhos+
            '&eyebrowType=' + this.model.sombra +
            '&mouthType=' + this.model.boca +
            '&skinColor=' + this.model.cor
          break;

        case 2:
          console.log("entrou case 2");
          this.url = 'https://avataaars.io/?avatarStyle=' + this.model.estilo +
            '&topType=' + this.model.cabelo +
            '&accessoriesType='+ this.model.acessorios +
            '&hairColor='+ this.model.corcabelo +
            '&facialHairType='+ this.model.barba +
            '&facialHairColor=' +this.model.corbarba +
            '&clotheType=' + this.model.roupa +
            '&clotheColor='+ this.model.corroupa +
            '&eyeType=' + this.model.olhos+
            '&eyebrowType=' + this.model.sombra +
            '&mouthType=' + this.model.boca +
            '&skinColor=' + this.model.cor
          break;

        case 3:
          console.log("entrou case 3");
          this.url = 'https://avataaars.io/?avatarStyle=' + this.model.estilo +
            '&topType=' + this.model.cabelo +
            '&accessoriesType='+ this.model.acessorios +
            '&hairColor='+ this.model.corcabelo +
            '&facialHairType='+ this.model.barba +
            '&facialHairColor=' +this.model.corbarba +
            '&clotheType=' + this.model.roupa +
            '&clotheColor='+ this.model.corroupa +
            '&eyeType=' + this.model.olhos+
            '&eyebrowType=' + this.model.sombra +
            '&mouthType=' + this.model.boca +
            '&skinColor=' + this.model.cor
          break;

          case 4:
          console.log("entrou case 4");
          this.url = 'https://avataaars.io/?avatarStyle=' + this.model.estilo +
            '&topType=' + this.model.cabelo +
            '&accessoriesType='+ this.model.acessorios +
            '&hairColor='+ this.model.corcabelo +
            '&facialHairType='+ this.model.barba +
            '&facialHairColor=' +this.model.corbarba +
            '&clotheType=' + this.model.roupa +
            '&clotheColor='+ this.model.corroupa +
            '&eyeType=' + this.model.olhos+
            '&eyebrowType=' + this.model.sombra +
            '&mouthType=' + this.model.boca+
            '&skinColor=' + this.model.cor
          break;

          case 5:
          console.log("entrou case 5");
          this.url = 'https://avataaars.io/?avatarStyle=' + this.model.estilo +
            '&topType=' + this.model.cabelo +
            '&accessoriesType='+ this.model.acessorios +
            '&hairColor='+ this.model.corcabelo +
            '&facialHairType='+ this.model.barba +
            '&facialHairColor=' + this.model.corbarba +
            '&clotheType=' + this.model.roupa +
            '&clotheColor='+ this.model.corroupa +
            '&eyeType=' + this.model.olhos+
            '&eyebrowType=' + this.model.sombra +
            '&mouthType='+ this.model.boca +
            '&skinColor=' + this.model.cor
          break;

          case 6:
          console.log("entrou case 6");
          this.url = 'https://avataaars.io/?avatarStyle=' + this.model.estilo +
            '&topType=' + this.model.cabelo +
            '&accessoriesType='+ this.model.acessorios +
            '&hairColor='+ this.model.corcabelo +
            '&facialHairType='+ this.model.barba +
            '&facialHairColor=' + this.model.corbarba +
            '&clotheType=' + this.model.roupa +
            '&clotheColor='+ this.model.corroupa +
            '&eyeType=' + this.model.olhos+
            '&eyebrowType='+ this.model.sombra +
            '&mouthType='+ this.model.boca +
            '&skinColor=' + this.model.cor
          break;

          case 7:
          console.log("entrou case 7");
          this.url = 'https://avataaars.io/?avatarStyle=' + this.model.estilo +
            '&topType=' + this.model.cabelo +
            '&accessoriesType='+ this.model.acessorios +
            '&hairColor='+ this.model.corcabelo +
            '&facialHairType='+ this.model.barba +
            '&facialHairColor=' + this.model.corbarba +
            '&clotheType=' + this.model.roupa +
            '&clotheColor='+ this.model.corroupa +
            '&eyeType=' + this.model.olhos+
            '&eyebrowType='+ this.model.sombra +
            '&mouthType='+ this.model.boca +
            '&skinColor=' + this.model.cor
          break;

          case 8:
          console.log("entrou case 8");
          this.url = 'https://avataaars.io/?avatarStyle=' + this.model.estilo +
            '&topType=' + this.model.cabelo +
            '&accessoriesType='+ this.model.acessorios +
            '&hairColor='+ this.model.corcabelo +
            '&facialHairType='+ this.model.barba +
            '&facialHairColor=' + this.model.corbarba +
            '&clotheType=' + this.model.roupa +
            '&clotheColor='+ this.model.corroupa +
            '&eyeType=' + this.model.olhos+
            '&eyebrowType='+ this.model.sombra +
            '&mouthType='+ this.model.boca +
            '&skinColor=' + this.model.cor
          break;

          case 9:
          console.log("entrou case 9");
          this.url = 'https://avataaars.io/?avatarStyle=' + this.model.estilo +
            '&topType=' + this.model.cabelo +
            '&accessoriesType='+ this.model.acessorios +
            '&hairColor='+ this.model.corcabelo +
            '&facialHairType='+ this.model.barba +
            '&facialHairColor=' + this.model.corbarba +
            '&clotheType=' + this.model.roupa +
            '&clotheColor='+ this.model.corroupa +
            '&eyeType=' + this.model.olhos+
            '&eyebrowType=' + this.model.sombra +
            '&mouthType=' + this.model.boca +
            '&skinColor=' + this.model.cor
          break;

          case 10:
          console.log("entrou case 10");
          this.url = 'https://avataaars.io/?avatarStyle=' + this.model.estilo +
            '&topType=' + this.model.cabelo +
            '&accessoriesType='+ this.model.acessorios +
            '&hairColor='+ this.model.corcabelo +
            '&facialHairType='+ this.model.barba +
            '&facialHairColor=' + this.model.corbarba +
            '&clotheType=' + this.model.roupa +
            '&clotheColor='+ this.model.corroupa +
            '&eyeType=' + this.model.olhos+
            '&eyebrowType=' + this.model.sombra +
            '&mouthType=' + this.model.boca +
            '&skinColor=' + this.model.cor
          break;

          case 11:
          console.log("entrou case 11");
          this.url = 'https://avataaars.io/?avatarStyle=' + this.model.estilo +
            '&topType=' + this.model.cabelo +
            '&accessoriesType='+ this.model.acessorios +
            '&hairColor='+ this.model.corcabelo +
            '&facialHairType='+ this.model.barba +
            '&facialHairColor=' + this.model.corbarba +
            '&clotheType=' + this.model.roupa +
            '&clotheColor='+ this.model.corroupa +
            '&eyeType=' + this.model.olhos+
            '&eyebrowType=' + this.model.sombra +
            '&mouthType=' + this.model.boca +
            '&skinColor=' + this.model.cor
          break;

          case 12:
          console.log("entrou case 11");
          this.url = 'https://avataaars.io/?avatarStyle=' + this.model.estilo +
            '&topType=' + this.model.cabelo +
            '&accessoriesType='+ this.model.acessorios +
            '&hairColor='+ this.model.corcabelo +
            '&facialHairType='+ this.model.barba +
            '&facialHairColor=' + this.model.corbarba +
            '&clotheType=' + this.model.roupa +
            '&clotheColor='+ this.model.corroupa +
            '&eyeType=' + this.model.olhos+
            '&eyebrowType=' + this.model.sombra +
            '&mouthType=' + this.model.boca +
            '&skinColor=' + this.model.cor
          break;

          'https://avataaars.io/?avatarStyle='+ +
          '&topType='+ +
          '&accessoriesType='+ +
          '&hatColor='+ +
          '&facialHairType='+ +
          '&facialHairColor='+ +
          '&clotheType='+ +
          '&clotheColor='+ +
          '&eyeType='+ +
          '&eyebrowType='+ +
          '&mouthType='+ +
          '&skinColor='
          
      }
    })
  }
  onChangeEstilo(deviceValue) {
    console.log(deviceValue)
    this.model.estilo = deviceValue;
    localStorage.setItem('url', "teste" + this.model.estilo)
    this.opcao.idItem = 1;
    this.opcao.nome = this.model.estilo;
    this.urlChanger.next(this.opcao);
  }

  onChangeCabelo(deviceValue) {
    console.log(deviceValue)
    this.model.cabelo = deviceValue;
    localStorage.setItem('url', "teste" + this.model.cabelo)
    this.opcao.idItem = 2;
    this.opcao.nome = this.model.cabelo;
    console.log(this.opcao);
    this.urlChanger.next(this.opcao);
  }
  onChangeAcessorios(deviceValue) {
    console.log(deviceValue, "acessorio device value")
    this.model.acessorios = deviceValue;
    localStorage.setItem('url', "teste" + this.model.acessorios)
    this.opcao.idItem = 3;
    this.opcao.nome = this.model.acessorios;
    console.log(this.opcao);
    this.urlChanger.next(this.opcao);
  }
  onChangeCorCabelo(deviceValue) {
    console.log(deviceValue)
    this.model.corcabelo = deviceValue;
    localStorage.setItem('url', "teste" + this.model.corcabelo)
    this.opcao.idItem = 4;
    this.opcao.nome = this.model.corcabelo;
    this.urlChanger.next(this.opcao);
  }
  onChangeBarba(deviceValue) {
    console.log(deviceValue)
    this.model.barba = deviceValue;
    localStorage.setItem('url', "teste" + this.model.barba)
    this.opcao.idItem = 5;
    this.opcao.nome = this.model.barba;
    this.urlChanger.next(this.opcao);
  }
  onChangeBarbaCor(deviceValue) {
    console.log(deviceValue)
    this.model.corbarba = deviceValue;
    localStorage.setItem('url', "teste" + this.model.corbarba)
    this.opcao.idItem = 6;
    this.opcao.nome = this.model.corbarba;
    this.urlChanger.next(this.opcao);
  }
  onChangeRoupa(deviceValue) {
    console.log(deviceValue)
    this.model.roupa = deviceValue;
    localStorage.setItem('url', "teste" + this.model.roupa)
    this.opcao.idItem = 7;
    this.opcao.nome = this.model.roupa;
    this.urlChanger.next(this.opcao);
  }
  onChangeCorRoupa(deviceValue) {
    console.log(deviceValue)
    this.model.corroupa = deviceValue;
    localStorage.setItem('url', "teste" + this.model.corroupa)
    this.opcao.idItem = 8;
    this.opcao.nome = this.model.corroupa;
    this.urlChanger.next(this.opcao);
  }
  onChangeOlhos(deviceValue) {
    console.log(deviceValue)
    this.model.olhos = deviceValue;
    localStorage.setItem('url', "teste" + this.model.olhos)
    this.opcao.idItem = 9;
    this.opcao.nome = this.model.olhos;
    this.urlChanger.next(this.opcao);
  }
  
  onChangeSombrancelhas(deviceValue) {
    console.log(deviceValue)
    this.model.sombra = deviceValue;
    localStorage.setItem('url', "teste" + this.model.sombra)
    this.opcao.idItem = 10;
    this.opcao.nome = this.model.sombra;
    this.urlChanger.next(this.opcao);
  }
  
  onChangeBoca(deviceValue) {
    console.log(deviceValue)
    this.model.boca = deviceValue;
    localStorage.setItem('url', "teste" + this.model.boca)
    this.opcao.idItem = 11;
    this.opcao.nome = this.model.boca;
    this.urlChanger.next(this.opcao);
  }

  onChangeCor(deviceValue) {
    console.log(deviceValue)
    this.model.cor = deviceValue;
    localStorage.setItem('url', "teste" + this.model.cor)
    this.opcao.idItem = 12;
    this.opcao.nome = this.model.cor;
    this.urlChanger.next(this.opcao);
  }
  onChangeDepartamento(deviceValue) {
    console.log(deviceValue)
    this.model.departamento = deviceValue;
    localStorage.setItem('url', "teste" + this.model.departamento)
    this.opcao.idItem = 13;
    this.opcao.nome = this.model.departamento;
    this.urlChanger.next(this.opcao);
  }
  onPrint() {
    console.log(this.model);
    console.log(this.formAvatar);
    this.model.cabelo.toString()
    this.listarTodosProdutos();

  }
  listarTodosProdutos() {
    this.http.get(`api/api/TipoObjetoes`)
      .subscribe(resultado => console.log(resultado));
  }
}


