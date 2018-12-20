import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DropboxService } from '../../services/dropbox/dropbox.service'

declare var moment: any; // Important
declare var $:any;

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  files:any[] = [];
  token:any;

  constructor(private activatedRoute: ActivatedRoute,
            public dropbox:DropboxService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      let code = params['code'];
      if(code){
        this.dropbox.postToken(code)
        .subscribe((response:any) => {
          console.log(response);
          this.token = response.access_token;
        },
        error => {
          console.log(error);
        });
      }
      

    });
  }

  //list_folder
  getFiles(){
    this.dropbox.getFiles(this.token)
      .subscribe((response:any) => {
        console.log(response);
        this.files = response.entries;
      },
      error => {
        console.log(error);
      })
  }

  

  downloadFile(item:any){
    console.log(item);
    const itemSplit = item.id.split(":");
    this.dropbox.downloadFile(item, this.token)
      .subscribe((response:any) => {
        console.log(response);
        // let fileReaded = response;
        // let reader: FileReader = new FileReader();
        // reader.readAsText(fileReaded);
        // console.log(reader);
      },
      error => {
        console.log("error");
        console.log(error);
      })
   

  }

  getTemporalLink(item:any){
    console.log(item);
    const itemSplit = item.id.split(":");
    this.dropbox.temporaryLink(item, this.token)
      .subscribe((response:any) => {
        console.log(response.link);
        fetch(response.link)
          .then(res => res.blob()) // Gets the response and returns it as a blob
          .then(blob => {
            // Here's where you get access to the blob
            // And you can use it for whatever you want
            // Like calling ref().put(blob)

            // Here, I use it to make an image appear on the page
            let objectURL = URL.createObjectURL(blob);
            //let myImage = new Image();
            //myImage.src = objectURL;
            console.log(objectURL);

            // let reader = new FileReader();
            // reader.addEventListener("loadend", function() {
            //   // reader.result contains the contents of blob as a typed array
            //   console.log(reader);
            // });
            // reader.readAsArrayBuffer(blob);
            //console.log(reader);
            
            let file = new File([blob], item.name, {lastModified: 1534584790000});
            console.log(file);
            //document.getElementById('myImg').appendChild(myImage)
        });
       
      },
      error => {
        console.log("error");
        console.log(error);
      })
  }

  downloadFileFetch(){
    
  }

  getFileMedia(item:any){
    console.log(item);
    const itemSplit = item.id.split(":");
    this.dropbox.getInfoFile(itemSplit[1], this.token, item)
      .subscribe((response:any) => {
        console.log(response);
      },
      error => {
        console.log(error);
      })
    

  }

  fileSelected(event){
    console.log(event);
  }

}
