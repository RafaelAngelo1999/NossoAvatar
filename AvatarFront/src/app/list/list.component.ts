import { Component, OnInit } from '@angular/core';

export class Opcao {
  constructor(public id: number, public idItem, public nome: string, public traducao: string) { }
}
export class Usuario {
  constructor(public id: number, public nome: string, public avatarUrl : string, public departamentoId: number) { }
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  listDepartamento = [
    new Opcao(1,13,"Administrativo","Administrativo"),
    new Opcao(2,13,"Desenvolvimento","Desenvolvimento"),
    new Opcao(3,13,"Diretores","Diretores"),
    new Opcao(4,13,"Suporte","Suporte"),
  ]

  listEstilo = [
    new Opcao(1,1,"Circle","Circulo"),
    new Opcao(2,1,"Transparent","Transparente"),
  ]

  listCabelos = [
    new Opcao(1,2,"NoHair","Careca"),
    new Opcao(2,2,"Eyepatch","Tampa Olho"),
    new Opcao(3,2,"Hat","Chapeu"),
    new Opcao(4,2,"Hijab","Hijab" ),
    new Opcao(5,2,"Turban","Turbante"),
    new Opcao(6,2,"WinterHat1","Chapeu Inverno"),
    new Opcao(7,2,"WinterHat2","Chapeu Inverno 2"),
    new Opcao(8,2,"WinterHat3","Chapeu Inverno 3"),
    new Opcao(9,2,"WinterHat4","Chapeu Inverno 4"),
    new Opcao(10,2,"LongHairBigHair","Cabelo Comprido Ondulado"),
    new Opcao(11,2,"LongHairBob", "Cabelo Curto"),
    new Opcao(12,2,"LongHairBun", "Coque Samurai"),
    new Opcao(13,2,"LongHairCurly", "Cabelo Medio Cheio"),
    new Opcao(14,2,"LongHairCurvy", "Cabelo Comprido Moldado"),
    new Opcao(15,2,"LongHairDreads", "Cabelo Comprido Dreads"),
    new Opcao(16,2,"LongHairFrida", "Cabelo Preso Florido"),
    new Opcao(17,2,"LongHairFro","Cabelo Medio Afro"),
    new Opcao(18,2,"LongHairFroBand","Cabelo Grande Afro"),
    new Opcao(19,2,"LongHairNotTooLong", "Cabelo Medio Curto"),
    new Opcao(20,2,"LongHairShavedSides", "Cabelo Comprido Moicado"),
    new Opcao(21,2,"LongHairMiaWallace", "Cabelo Medio Curto 2"),
    new Opcao(22,2,"LongHairStraight", "Cabelo Comprido Natural"),
    new Opcao(23,2,"LongHairStraight2","Cabelo Comprido Natural 2"),
    new Opcao(24,2,"LongHairStraightStrand", "Cabelo Comprido Natural 3"),
    new Opcao(25,2,"ShortHairDreads01", "Curto Dreads Moderno"),
    new Opcao(26,2,"ShortHairDreads02", "Medio Dreads Moderno"),
    new Opcao(27,2,"ShortHairFrizzle", "Curto Moicano Moderno"),
    new Opcao(28,2,"ShortHairShaggyMullet", "Medio Social"),
    new Opcao(29,2,"ShortHairShortCurly", "Curto Social"),
    new Opcao(30,2,"ShortHairShortFlat", "Curto Moderno"),
    new Opcao(31,2,"ShortHairShortRound", "Curto Moderno 2"),
    new Opcao(32,2,"ShortHairShortWaved", "Curto Moderno 3"),
    new Opcao(33,2,"ShortHairSides", "Calvo"),
    new Opcao(34,2,"ShortHairTheCaesar", "Curto Moderno New"),
    new Opcao(35,2,"ShortHairTheCaesarSidePart", "Curto Moderno New c/ Risquinho")
  ]
  listAcessorios = [
    new Opcao(1,3,"Blank","Sem Acessorio"),
    new Opcao(2,3,"Kurt","Oculos Kurt"),
    new Opcao(3,3,"Prescription01","Oculos de Grau Branco"),
    new Opcao(4,3,"Prescription02","Oculos de Grau Preto" ),
    new Opcao(5,3,"Round","Oculos de Grau Arredondado"),
    new Opcao(6,3,"Sunglasses","Oculos Escuro Preto"),
    new Opcao(7,3,"Wayfarers","Oculos Escuro Preto 2"),
  ]
  listCorCabelo = [
    new Opcao(1,4,"Auburn","Laranja"),
    new Opcao(2,4,"Black","Preto"),
    new Opcao(3,4,"Blonde","Loiro Escuro"),
    new Opcao(4,4,"BlondeGolden","Loiro Claro" ),
    new Opcao(5,4,"Brown","Marrom"),
    new Opcao(6,4,"BrownDark","Marrom Escuro"),
    new Opcao(7,4,"PastelPink","Rosa Pastel"),
    new Opcao(8,4,"Platinum","Platinado"),
    new Opcao(9,4,"Red","Vermelho"),
    new Opcao(10,4,"SilverGray","Cinza Claro"),
  ]
  listBarba = [
    new Opcao(1,5,"Blank","Sem Barba"),
    new Opcao(2,5,"BeardMedium","Barba Media"),
    new Opcao(3,5,"BeardLight","Barba Curta"),
    new Opcao(4,5,"BeardMagestic","Barba Cheia" ),
    new Opcao(5,5,"MoustacheFancy","Bigode Moustache"),
    new Opcao(6,5,"MoustacheMagnum","Bigode Magnum"),
  ]
  listCorBarba = [
    new Opcao(1,6,"Brown","Marrom"),
    new Opcao(2,6,"Auburn","Laranja"),
    new Opcao(3,6,"Black","Preto"),
    new Opcao(4,6,"Blonde","Loiro Escuro"),
    new Opcao(5,6,"BlondeGolden","Loiro Claro" ),
    new Opcao(6,6,"BrownDark","Marrom Escuro"),
    new Opcao(8,6,"Platinum","Platinado"),
    new Opcao(9,6,"Red","Vermelho"),
  ]
  listRoupa = [
    new Opcao(1,7,"BlazerShirt","Camisa"),
    new Opcao(2,7,"BlazerSweater","Camisa c/ Gola"),
    new Opcao(3,7,"CollarSweater","Camisa Caveira"),
    new Opcao(4,7,"Hoodie","Blusa de Frio c/ Capuz" ),
    new Opcao(5,7,"Overall","Jardineira"),
    new Opcao(6,7,"ShirtCrewNeck","Camisa Lisa"),
    new Opcao(8,7,"ShirtScoopNeck","Camisa Lisa s/ Gola"),
    new Opcao(9,7,"ShirtVNeck","Camisa c/ Gola 'V'"),
  ]
  listCorRoupa = [
    new Opcao(1,8,"Black","Preto"),
    new Opcao(2,8,"Blue01","Azul"),
    new Opcao(3,8,"Blue02","Azul 2"),
    new Opcao(4,8,"Blue03","Azul 3" ),
    new Opcao(5,8,"Gray01","Cinza"),
    new Opcao(6,8,"Gray02","Cinza 2"),
    new Opcao(7,8,"Heather","Urze"),
    new Opcao(8,8,"PastelBlue","Azul Pastel"),
    new Opcao(9,8,"PastelGreen","Verde Pastel"),
    new Opcao(10,8,"PastelOrange","Laranja Pastel"),
    new Opcao(11,8,"PastelRed","Vermelho Pastel"),
    new Opcao(12,8,"PastelYellow","Amarelo Pastel"),
    new Opcao(13,8,"Pink","Rosa"),
    new Opcao(14,8,"White","Branco"),
  ]
  listOlhos = [
    new Opcao(1,9,"Default","Padrao"),
    new Opcao(2,9,"Close","Fechado"),
    new Opcao(3,9,"Cry","Choro"),
    new Opcao(4,9,"Dizzy","Morto" ),
    new Opcao(5,9,"EyeRoll","Torto"),
    new Opcao(6,9,"Happy","Feliz"),
    new Opcao(7,9,"Hearts","Apaixonado"),
    new Opcao(8,9,"Side","Lado"),
    new Opcao(9,9,"Squint","Estrabismo"),
    new Opcao(10,9,"Surprised","Surpreso"),
    new Opcao(11,9,"Wink","Piscadela"),
    new Opcao(12,9,"WinkWacky","Piscadela 2"),
  ]
  listSombrancelha = [
    new Opcao(1,10,"Default","Padrao"),
    new Opcao(2,10,"Angry","Bravo"),
    new Opcao(3,10,"AngryNatural","Bravo Natural"),
    new Opcao(4,10,"DefaultNatural","Padrao Natural" ),
    new Opcao(5,10,"FlatNatural","Plano Natural"),
    new Opcao(6,10,"RaisedExcited","Levantado Animado"),
    new Opcao(7,10,"RaisedExcitedNatural","Levantado Animado Natural"),
    new Opcao(8,10,"SadConcerned","Triste Preocupado"),
    new Opcao(9,10,"SadConcernedNatural","Triste Preocupado Natural"),
    new Opcao(10,10,"UnibrowNatural","Cheio Natural"),
    new Opcao(11,10,"UpDown","Cima Baixo"),
    new Opcao(12,10,"UpDownNatural","Cima Baixo 2"),
  ]
  listBocas = [
    new Opcao(1,11,"Default","Padrao"),
    new Opcao(2,11,"Concerned","Preocupado"),
    new Opcao(3,11,"Disbelief","Surpresa Triste"),
    new Opcao(4,11,"Eating","Comendo" ),
    new Opcao(5,11,"Grimace","Careta"),
    new Opcao(6,11,"Sad","Triste"),
    new Opcao(7,11,"ScreamOpen","Boca Aberta"),
    new Opcao(8,11,"Serious","Grave"),
    new Opcao(9,11,"Smile","Sorriso"),
    new Opcao(10,11,"Tongue","Lingua p/ Fora"),
    new Opcao(11,11,"Twinkle","Feliz"),
    new Opcao(12,11,"Vomit","Vomito"),
  ]
  listCor = [
    new Opcao(1,12,"Light","Pardo" ),
    new Opcao(2,12,"Tanned","Bronzeado"),
    new Opcao(3,12,"Yellow","Amarelo"),
    new Opcao(4,12,"Pale","Palido"),
    new Opcao(5,12,"Brown","Pardo Escuro"),
    new Opcao(6,12,"DarkBrown","Moreno"),
    new Opcao(7,12,"Black","Moreno Escuro"),
  ]

  constructor() { }

  ngOnInit() {
  }

}
