import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';

import {FormBuilder, FormGroup} from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
receipient: string;

  credentialsForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,private loadingCtrl: LoadingController,
              private formBuilder: FormBuilder) {
    this.receipient = this.navParams.get('mail_receipiennt');
    this.credentialsForm = this.formBuilder.group({
      mail_to: this.receipient,
      email: [''],
      message: ['']
    });
    this.ionViewDidLoad();
  }

  public sendContact(){
    console.log('Form submit');
  }

  public closeModal() {
    this.viewCtrl.dismiss();
  }

  public send() {
    console.log(this.credentialsForm.value);
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log(this.navParams.get('message'));
  }
}
