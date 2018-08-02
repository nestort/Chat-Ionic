import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2'; 


var config = {
  apiKey: "AIzaSyCcNPUUDbJxwGtu_6j7SormP3AkVP7S2rM",
  authDomain: "qwerty-690fb.firebaseapp.com",
  databaseURL: "https://qwerty-690fb.firebaseio.com",
  projectId: "qwerty-690fb",
  storageBucket: "qwerty-690fb.appspot.com",
  messagingSenderId: "543254249496"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
