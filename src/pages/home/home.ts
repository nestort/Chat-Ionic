import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import{ChatPage}from '../chat/chat';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  username:string="";
  
  constructor(public navCtrl: NavController, private alertCtrl:AlertController) {

  }
  //metodo para mostrar alertas basicas recibe un titulo y un mensaje para desplegar 
  showAlert(titulo:string,mensaje:string) {
    const alert = this.alertCtrl.create({
      title: titulo,
      subTitle: mensaje,
      buttons: ['OK']
    });
    alert.present();
  }

  //metodo valida el nick seleccionado. Que este contenga minusculas, mayusculas y numeros
  LoginUser(){
    console.log("Usuario->"+this.username)
    if(/^[a-zA-Z0-9*]+$/.test(this.username)){
      this.showAlert("Bienvenido","Hola,"+this.username);
      this.navCtrl.push(ChatPage,{username:this.username});
    }else{
      this.showAlert("Error","Al seleccionar su nick, solo son perminitidos mayusculas, minusculas y numeros");
    }
  }



}


