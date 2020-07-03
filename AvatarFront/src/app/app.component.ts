import { Component, ElementRef, OnInit, Renderer2, ViewChild, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { Identifiers } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';

export class Cabelo {
  constructor(public id: number, public nome: string) { }
}
export class Opcao {
  constructor(public id: number, public nome: string) { }
}
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
      transparent:'Transparent',
      cabelo: 'noHair',
      acessorios:'Blank',
      corcabelo: 'Blank',
      barba:'Blank',
      roupa: 'BlazerShirt',
      olhos: 'Default',
      sobra: 'RaisedExcitedNatural',
      boca: 'Smile',
      cor:'Light'
  }
  url 
  urlChanger = new Subject<Opcao>();
  subsUrlChanger : Subscription;
  opcao = new Opcao(0,"");
  listCabelos = [
    new Cabelo(1, "NoHair"),
    new Cabelo(2, "Eyepatch"),
    new Cabelo(3, "Hat"),
    new Cabelo(4, "Hijab"),
    new Cabelo(5, "Turban"),
    new Cabelo(6, "WinterHat1"),
    new Cabelo(7, "WinterHat2"),
    new Cabelo(8, "WinterHat3"),
    new Cabelo(9, "WinterHat4"),
    new Cabelo(10, "LongHairBigHair"),
    new Cabelo(11, "LongHairBob"),
    new Cabelo(12, "LongHairBun"),
    new Cabelo(13, "LongHairCurly"),
    new Cabelo(14, "LongHairCurvy"),
    new Cabelo(15, "LongHairDreads"),
    new Cabelo(16, "LongHairFrida"),
    new Cabelo(17, "LongHairFro"),
    new Cabelo(18, "LongHairFroBand"),
    new Cabelo(19, "LongHairNotTooLong"),
    new Cabelo(20, "LongHairShavedSides"),
    new Cabelo(21, "LongHairMiaWallace"),
    new Cabelo(22, "LongHairStraight"),
    new Cabelo(23, "LongHairStraight2"),
    new Cabelo(24, "LongHairStraightStrand"),
    new Cabelo(25, "ShortHairDreads01"),
    new Cabelo(26, "ShortHairDreads02"),
    new Cabelo(27, "ShortHairFrizzle"),
    new Cabelo(28, "ShortHairShaggyMullet"),
    new Cabelo(29, "ShortHairShortCurly"),
    new Cabelo(30, "ShortHairShortFlat"),
    new Cabelo(31, "ShortHairShortRound"),
    new Cabelo(32, "ShortHairShortWaved"),
    new Cabelo(33, "ShortHairSides"),
    new Cabelo(34, "ShortHairTheCaesar"),
    new Cabelo(35, "ShortHairTheCaesarSidePart")
  ]
  	
  readonly apiURL : string;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    
    this.apiURL = 'http://localhost:54130/';

  }
  ngOnInit() {
    this.formAvatar = this.formBuilder.group({
      transparent: 'Transparent',
      cabelo: 'noHair',
      acessorios:'Blank',
      cabelocor: 'Blank',
      barba:'Blank',
      roupa: 'BlazerShirt',
      olhos: 'Default',
      sobra: 'RaisedExcitedNatural',
      boca: 'Smile',
      cor:'Light'
    })
    this.url = 'https://avataaars.io/?avatarStyle='+this.model.transparent+
          '&topType='+this.model.cabelo+
          '&accessoriesType='+this.model.acessorios+
          '&hatColor='+this.model.corcabelo+
          '&facialHairType='+this.model.barba+
          '&clotheType='+this.model.roupa+
          '&eyeType='+this.model.olhos+
          '&eyebrowType='+this.model.sobra+
          '&mouthType='+this.model.boca+
          '&skinColor='+this.model.cor

    console.log(this.formAvatar);
    this.subsUrlChanger = this.urlChanger.subscribe((respose) =>{
      switch (respose.id){
        case 1:
          this.url = 'https://avataaars.io/?avatarStyle=Transparent'+
          '&topType='+this.model.cabelo+
          '&accessoriesType=Blank'+
          '&hatColor=Blue01'+
          '&facialHairType=Blank'+
          '&clotheType=BlazerShirt'+
          '&eyeType=Default'+
          '&eyebrowType=RaisedExcitedNatural'+
          '&mouthType=Smile'+
          '&skinColor=Light'
          
      }
    })
  }
    onChangeCabelo(deviceValue) {
      console.log(deviceValue)
      this.model.cabelo = deviceValue;
      localStorage.setItem('url', "teste"+this.model.cabelo)
      this.opcao.id = 1;
      this.opcao.nome = this.model.cabelo;
      this.urlChanger.next(this.opcao);
  
  }
  onPrint(){
    console.log(this.model);
    console.log(this.formAvatar);
    this.model.cabelo.toString()
    this.listarTodosProdutos();

  }
  listarTodosProdutos() {
    this.http.get(`api/api/Cabelos`)
             .subscribe(resultado => console.log(resultado));
  }
}


