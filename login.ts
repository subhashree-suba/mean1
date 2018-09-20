import { Component, ViewChild } from '@angular/core';
import {NavController, NavParams, AlertController,ToastController  } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';

import {HomePage} from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('userName') userName;
  @ViewChild('password') password;

  constructor(private fire:AngularFireAuth, private alertctrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private toastctrl: ToastController) {
  }

  // alert(message:string) {
  //   this.alertctrl.create({
  //     title: 'Info',
  //     subTitle: message,
  //     buttons: ['OK']
  //   }).present();
  // }

  toast(message:string, value:boolean) {
    this.toastctrl.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      showCloseButton: value
    }).present();

  }

  signIn() {
    this.fire.auth.signInWithEmailAndPassword(this.userName.value , this.password.value)
    .then( data => {
      console.log("got data");
      // this.alert("Success! You're logged in");
      this.toast("Success! You're logged in", false);
      this.navCtrl.setRoot(HomePage);
    })
    .catch( error => {
      console.log("got error", error)
      // this.alert("Invalid Username or Password");
      this.toast("Invalid Username or Password", true);
    })
    // this.navCtrl.push(FirstPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
