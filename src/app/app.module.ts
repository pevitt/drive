import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { UploadComponent } from './components/upload/upload.component';
import { DownloadComponent } from './components/download/download.component';

import { GoogleapiService } from './services/googleapi/googleapi.service';
import { DropboxService } from './services/dropbox/dropbox.service';
import { GmailService } from './services/gmail/gmail.service';
import { GsuiteService } from './services/gsuite/gsuite.service';

import { APPR } from './app-routing';
import { GmailComponent } from './components/gmail/gmail.component';
import { GsuiteComponent } from './components/gsuite/gsuite.component';

export function initGapi(gapiSession: GoogleapiService) {
  return () => gapiSession.initClient();
}

//{ provide: APP_INITIALIZER, useFactory: initGapi, deps: [GoogleapiService], multi: true },

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    UploadComponent,
    DownloadComponent,
    GmailComponent,
    GsuiteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(APPR),
  ],
  providers: [
    GoogleapiService, DropboxService, GmailService, GsuiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }

