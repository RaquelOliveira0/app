import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CadastroserPage} from '../cadastroser/cadastroser';
import {ContratarPage} from '../contratar/contratar';
import { PrincipalPage} from '../principal/principal';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  email:string;
  password:string;

  constructor(public navCtrl: NavController) {

  }
login(){
  console.log('Email:'+this.email);
  console.log('Password:'+this.password);
  this.navCtrl.push( PrincipalPage);
}
goToCadastroServicePage(){
    this.navCtrl.push(CadastroserPage);
  }

goToContratar(){
    this.navCtrl.push(ContratarPage);
  }

}
