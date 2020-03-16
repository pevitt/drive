import { Injectable } from '@angular/core';

const API_KEY = ''; 
const CLIENT_ID = '';
const SECRET_ID = '';
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/admin/directory_v1/rest"];
var SCOPES = 'https://www.googleapis.com/auth/admin.directory.user.readonly';
declare var gapi:any;

@Injectable({
  providedIn: 'root'
})
export class GsuiteService {

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

  getUsers() {  
    return gapi.client.directory.users.list({
        'customer': 'my_customer',
        'maxResults': 10,
        'orderBy': 'email'
    }).then((res) => {
        
        return res;
    });
  }

}
