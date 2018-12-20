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

import { APPR } from './app-routing';

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
    DownloadComponent
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
    GoogleapiService, DropboxService],
  bootstrap: [AppComponent]
})
export class AppModule { }

