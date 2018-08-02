import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database';
//import { Observable } from 'rxjs';
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  usuario:string;
  mensaje:string;
  mensajes:object[]=[];
  suscripcion;
  
  constructor( public navCtrl: NavController, public db: AngularFireDatabase,public navParams: NavParams) {    
    //Recibe el usuario por parametro
    this.usuario=this.navParams.get("username");    
    this.db.list('/chat').valueChanges().subscribe((data)=>{
      //console.log("datas",datas);
      //datas.map(elem=>this.mensajes=datas);
      this.mensajes=data;
    },(error)=>{console.log("error",error)});    
  }

  enviarMensaje(){
    try{
      this.db.list('/chat').push({
        usuario:this.usuario,
        mensaje:this.mensaje
      }).then(()=>{
        this.mensaje="";
      });
    }catch(Error){
      console.log("Ha ocurrido un error en la pagina chat: "+Error);
      this.showAlert("Ups","Ha ocurrido un error, no se ha establecido la conexion");
      
    }
  }
  
  ionViewDidLoad() {    
    console.log('ionViewDidLoad ChatPage');
  }

  showAlert(titulo:string,mensaje:string) {
    const alert = this.alertCtrl.create({
      title: titulo,
      subTitle: mensaje,
      buttons: ['OK']
    });
    alert.present();
  }

}
