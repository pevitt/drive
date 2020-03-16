import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

const DROPBOX_URL = 'https://api.dropboxapi.com/';
const DROPBOX_DOWNLOAD = 'https://content.dropboxapi.com/';
const APP_KEY = "";
const APP_SECRET = "";
const TOKEN = "";

@Injectable({
  providedIn: 'root'
})
export class DropboxService {

  constructor(private http:HttpClient) { }

  /**
	* Get token to access
	*/
	postToken(code:any){
		

    let headers = new HttpHeaders().set("Authorization", "Basic " + btoa(`${APP_KEY}:${APP_SECRET}`))
      .set("Content-Type", "application/x-www-form-urlencoded");
    
      
     	let options = { headers: headers };

		let data = `code=${code}&grant_type=authorization_code&redirect_uri=http://localhost:4200/upload`;

		return this.http.post(`${DROPBOX_URL}oauth2/token`, data, options);

  }
  
  /**
	* Get files  Files
	*/
	getFiles(token2:any){
		

    let headers = new HttpHeaders().set('Authorization', `Bearer ${TOKEN}`)
    .set("Content-Type", "application/json");
     let options = { headers: headers };
    
    let data = {
      "path": "",
      "recursive": false,
      "include_media_info": true,
      "include_deleted": false,
      "include_has_explicit_shared_members": false,
      "include_mounted_folders": true
    };

    return this.http.post(`${DROPBOX_URL}2/files/list_folder`, data, options);

  }

  /**
	* Get files file_requests
	*/
	getFilesRequest(token2:any){
		

    let headers = new HttpHeaders().set('Authorization', `Bearer ${TOKEN}`);
     let options = { headers: headers };
    
    let data = {
      
    };

    return this.http.post(`${DROPBOX_URL}2/file_requests/list`, null, options);

  }

  /**
	* Get files 
	*/
	downloadFile(item:any,token2:any){
    
    let data = {
      "path": item.path_lower,
    };

    let headers = new HttpHeaders().set('Authorization', `Bearer ${TOKEN}`)
    .set("Dropbox-API-Arg", JSON.stringify(data))
    .set("Content-Type", "application/octet-stream; charset=utf-8");

     let options = { headers: headers };

     let data2 = ``;
    

    return this.http.post(`${DROPBOX_DOWNLOAD}2/files/download`, data2, options);

  }


  /**
	* Get Temporary Link 
	*/
	temporaryLink(item:any,token2:any){
    
    let data = {
      "path": item.path_lower,
    };

    let headers = new HttpHeaders().set('Authorization', `Bearer ${TOKEN}`)
    .set("Content-Type", "application/json");

     let options = { headers: headers };

     
    

    return this.http.post(`${DROPBOX_URL}2/files/get_temporary_link`, data, options);

  }


  /**
	* Get files 
	*/
	getInfoFile(id:any,token2:any, fullItem:any){
    
    let data = {
      "id": id,
    };

    let headers = new HttpHeaders().set('Authorization', `Bearer ${TOKEN}`)
    .set("Content-Type", "application/json");

     let options = { headers: headers };

     
    

    return this.http.post(`${DROPBOX_URL}2/file_requests/get`, data, options);

  }


}
