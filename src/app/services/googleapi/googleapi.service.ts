import { Injectable } from '@angular/core';

const API_KEY = ''; 
const CLIENT_ID = '';
const SECRET_ID = '';
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
var SCOPES = 'https://www.googleapis.com/auth/drive';
declare var gapi:any;


@Injectable({
  providedIn: 'root'
})
export class GoogleapiService {
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

  getFiles(folderId: string) {  
    return gapi.client.drive.files.list({
        pageSize: 100,
        fields: "nextPageToken, files(id, name, mimeType, modifiedTime, size)",
        q: `'${folderId}' in parents and trashed = false`
    }).then((res) => {
        
        return res;
    });
  }

  getFile(fileId: string, mimeType:any) {  
    return gapi.client.drive.files.get({
        fileId: fileId,
        fields: 'webViewLink'
    }).then((res) => {
        
        return res;
    });
  }

  getFileMedia(fileId: string, mimeType:any) {  
    return gapi.client.drive.files.get({
        fileId: fileId,
        alt: 'media'
    }).then((res) => {
        
        return res;
    });
  }

  getFileExport(fileId: string, mimeType:any) {  
    return gapi.client.drive.files.export({
      'fileId' : fileId,
      'mimeType' : mimeType
    }).then((res) => {
        
        return res;
    });
  }



}
