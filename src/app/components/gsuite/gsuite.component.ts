import { Component, OnInit, NgZone } from '@angular/core';
import { GsuiteService } from '../../services/gsuite/gsuite.service'
import { FileInfo, MIME_TYPE_FOLDER } from "../../models/file-info";
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-gsuite',
  templateUrl: './gsuite.component.html',
  styleUrls: ['./gsuite.component.css']
})
export class GsuiteComponent implements OnInit {

  users:any[] = [];
  emails:any[] = [];
  itemEmail:any = {};

  constructor(private gsuite:GsuiteService,
              private zone:NgZone,
              private http:HttpClient) { }

  ngOnInit() {
    this.gsuite.initClient();
  }

  login(){
    this.gsuite.signIn()
      .then((res) => {
        console.log(res);
      });
  }

  getUsers(){
    this.gsuite.getUsers()
    .then((res) => {
      //console.log(res);
      this.zone.run(() => {
        console.log(res);
        // this.users = res.result.labels;
        // console.log(this.users);
      });
     
    });
  }

}
