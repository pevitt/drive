import { Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { UploadComponent } from './components/upload/upload.component';
import { DownloadComponent } from './components/download/download.component';
import { GmailComponent } from './components/gmail/gmail.component';
import { GsuiteComponent } from './components/gsuite/gsuite.component';

export const APPR : Routes= [
	{
		path:'dashboard',
		component:DashboardComponent
	},
	{
		path:'login',
		component:LoginComponent
	},
	{
		path:'upload',
		component:UploadComponent
	},
	{
		path:'download',
		component:DownloadComponent
	},
	{
		path:'gmail',
		component:GmailComponent
	},
	{
		path:'gsuite',
		component:GsuiteComponent
	},
	{
  		path: '**',
  		pathMatch: 'full',
  		redirectTo: 'login'
 	}
];