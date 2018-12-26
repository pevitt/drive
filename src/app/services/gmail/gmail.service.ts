import { Injectable } from '@angular/core';

const API_KEY = 'AIzaSyCS2KUfDu55aM4hMoulldxfHIZlDOJ7VIE'; 
const CLIENT_ID = '557098424119-8e9o60gafssf3esjmm0gfj8989idkak0.apps.googleusercontent.com';
const SECRET_ID = 'oIhy_I7CgxUKG5A30kt6D5ec';
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];
var SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';
declare var gapi:any;

@Injectable({
  providedIn: 'root'
})
export class GmailService {

  googleAuth: gapi.auth2.GoogleAuth;

  constructor() { }


  initClient() {
    //console.log("aca2");
    return new Promise((resolve,reject)=>{
        gapi.load('client:auth2', () => {
            return gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES,
            }).then(() => {                   
                this.googleAuth = gapi.auth2.getAuthInstance();
                resolve();
            });
        });
    });
    
  }

  isSignedIn(): boolean {
    return this.googleAuth.isSignedIn.get();
  }

  signIn() {
      return this.googleAuth.signIn({
          prompt: 'consent'
      }).then((googleUser: gapi.auth2.GoogleUser) => {
          //this.appRepository.User.add(googleUser.getBasicProfile());
          console.log(googleUser.getBasicProfile());
      });
  }

  signOut(): void {
      this.googleAuth.signOut();
  }

  getGmailLabels() {  
    return gapi.client.gmail.users.labels.list({
        'userId': 'me'
    }).then((res) => {
        
        return res;
    });
  }

  getGmailMessages() {  
    return gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'labelIds':['INBOX']
    }).then((res) => {
        
        return res;
    });
  }

  getGmailItem(id) {  
    return gapi.client.gmail.users.messages.get({
        'userId': 'me',
        'id': id
    }).then((res) => {
        
        return res;
    });
  }

//   getGmailItem(id) {  
//     return gapi.client.gmail.users.messages.get({
//         'userId': 'me',
//         'id': id
//     }).then((res) => {
        
//         return res;
//     });
//   }

}
