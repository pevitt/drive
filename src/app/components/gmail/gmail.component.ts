import { Component, OnInit, NgZone } from '@angular/core';
import { GmailService } from '../../services/gmail/gmail.service'
import { FileInfo, MIME_TYPE_FOLDER } from "../../models/file-info";
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-gmail',
  templateUrl: './gmail.component.html',
  styleUrls: ['./gmail.component.css']
})
export class GmailComponent implements OnInit {

  labels:any[] = [];
  emails:any[] = [];
  itemEmail:any = {};

  constructor(private gmail:GmailService,
              private zone:NgZone,
              private http:HttpClient) { }

  ngOnInit() {
    this.gmail.initClient();
  }

  login(){
    this.gmail.signIn()
      .then((res) => {
        console.log(res);
      });
  }

  getLabels(){
    this.gmail.getGmailLabels()
    .then((res) => {
      //console.log(res);
      this.zone.run(() => {
        this.labels = res.result.labels;
        console.log(this.labels);
      });
     
    });
  }

  getEmails(){
    this.gmail.getGmailMessages()
    .then((res) => {
      console.log(res);
      this.zone.run(() => {
        this.emails = res.result.messages;
        console.log(this.emails);
      });
    });
  }

  getEmail(item:any){
    this.gmail.getGmailItem(item.id)
    .then((res) => {
      
      this.zone.run(() => {
        console.log(res);  
      });
    });
  }

}
