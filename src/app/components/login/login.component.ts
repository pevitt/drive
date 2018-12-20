import { Component, OnInit, NgZone } from '@angular/core';
import { GoogleapiService } from '../../services/googleapi/googleapi.service'
import { FileInfo, MIME_TYPE_FOLDER } from "../../models/file-info";
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  files:FileInfo[] = [];

  folderRoot:string[] = [];

  constructor(private google:GoogleapiService,
              private zone:NgZone,
              private http:HttpClient) { }

  ngOnInit() {
    this.google.initClient();
  }

  login(){
    this.google.signIn()
      .then((res) => {
        console.log(res);
      });
  }

  getListFiles(fileId:string){
    this.folderRoot.push(fileId);
    console.log(this.folderRoot);
    this.google.getFiles(fileId)
    .then((res) => {
      //console.log(res.result);
      this.zone.run(() => {
        this.files = res.result.files;
        console.log(this.files);
      });
      
    });
  }

  dropTop(fileId:string){
    this.folderRoot.pop();
    console.log(this.folderRoot);
    console.log(fileId);
    this.google.getFiles(fileId)
    .then((res) => {
      //console.log(res.result);
      this.zone.run(() => {
        this.files = res.result.files;
        console.log(this.files);
      });
      
    });
  }

  //Web Content Link
  getFile(fileId:string, mimeType:string, item:any){
    
    this.google.getFile(fileId, mimeType)
    .then((res) => {
      console.log(res);
      // console.log(res.result.webContentLink);
      // item.webContentLink = res.result.webContentLink;
      //console.log(this.files);
      
    });
  }

  download(item:any){
    console.log(item);
    fetch(item.webContentLink)
      .then(res => res.blob()) // Gets the response and returns it as a blob
      .then(blob => {
        // Here's where you get access to the blob
        // And you can use it for whatever you want
        // Like calling ref().put(blob)
        console.log(blob);
        // Here, I use it to make an image appear on the page
        let objectURL = URL.createObjectURL(blob);
        // let myImage = new Image();
        // myImage.src = objectURL;
        console.log(objectURL);
        let file = new File([blob], item.name, {lastModified: 1534584790000});
        
        console.log(file);
        //document.getElementById('myImg').appendChild(myImage)
    });
  }

  downloadExport(item:any){
    console.log(item);
    this.google.getFileExport(item.id, item.mimeType)
    .then((res) => {
      console.log(res);
      
      //console.log(this.files);
      
    });
  }

  downloadMedia(item:any){
    console.log(item);
    this.google.getFileMedia(item.id, item.mimeType)
    .then((res) => {
      console.log(res);
      let oMyBlob = new Blob([res.body], {type : item.mimeType});
      console.log(oMyBlob);
      let objectURL = URL.createObjectURL(oMyBlob);   
      console.log(objectURL);

      //let base64 = `data:${item.mimeType};base64,` + res.body;
      //console.log(base64);
      
    });
  }

  getDirectFile(item){
    let id = item.id;
    //https://drive.google.com/uc?authuser=1&id=0B3dCT49w4SM5YnAxVGt5NlFQbTg&export=download
    let url = `https://drive.google.com/uc?authuser=1&id=${id}&export=download`;
    console.log(url);
    fetch(url)
      .then(res => res.blob()) // Gets the response and returns it as a blob
      .then(blob => {
        // Here's where you get access to the blob
        // And you can use it for whatever you want
        // Like calling ref().put(blob)
        console.log(blob);
        // Here, I use it to make an image appear on the page
        let objectURL = URL.createObjectURL(blob);
        // let myImage = new Image();
        // myImage.src = objectURL;
        console.log(objectURL);
        let file = new File([blob], item.name, {lastModified: 1534584790000});
        
        console.log(file);
        //document.getElementById('myImg').appendChild(myImage)
    });

  }

  

}
