import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';

import {Validators, FormBuilder, FormGroup} from "@angular/forms";
import {GlobalVars} from "../../providers/global-vars";
import {Http} from "@angular/http";
import {EmailComposer} from "@ionic-native/email-composer";

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  receipient: string;
  data:any = {};
  credentialsForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private global: GlobalVars,
    private emailComposer: EmailComposer,
    private http: Http,
    private loadingCtrl: LoadingController,
              private formBuilder: FormBuilder) {
    this.receipient = this.navParams.get('mail_receipiennt');
    this.credentialsForm = this.formBuilder.group({
      email_to: this.receipient,
      // email_from: ['',Validators.compose([Validators.pattern(
      //   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), Validators.required])],
      no_html: ['']
    });
    this.data.response = '';
    // this.ionViewDidLoad();
  }

  public sendContact() {
    console.log('Form submit');
  }

  public closeModal() {
    this.viewCtrl.dismiss();
  }

  public send() {
    // console.log(this.credentialsForm.value);

    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        //Now we know we can send
        console.log("mail available");
      }
    });

    let email = {
      app: 'gmail',
      to: this.credentialsForm.value.email_to,
      cc: 'xtianmpimbaza@gmail.com',
      bcc: ['christianm@autosoftug.com', 'christianm@autosoftug.com'],
      subject: 'Interaction with african blockchain conference attendee',
      body: this.credentialsForm.value.no_html,
      isHtml: true
    };

    // this.emailComposer.addAlias('gmail', 'com.google.android.gm');
//
// // then use alias when sending email
//     this.emailComposer.open({
//       app: 'gmail',
//       ...
//     });

// Send a text message using default options
    this.emailComposer.open(email);


    // let loader = this.loadingCtrl.create({
    //   content: "Sending....."
    // });
    // loader.present();
    //
    // new Promise(resolve => {
    //   this.http.post(this.global.api_url, this.credentialsForm.value)
    //     .map(res => res.json())
    //     .subscribe((result) => {
    //         console.log(result);
    //
    //         if (result.feedback =='success') {
    //           this.global.toast("Email sent.", 'toast-error');
    //           loader.dismiss();
    //           this.closeModal();
    //         } else {
    //             this.global.toast("Error occurred, Email not sent", 'toast-error');
    //             loader.dismiss();
    //         }
    //       },
    //       (err) => {
    //         this.global.toast("Error occurred, Check your internet connection", 'toast-error');
    //         loader.dismiss();
    //       });
    // });

  }

  // ionViewDidLoad() {
  //   console.log(this.navParams.get('message'));
  // }
}
