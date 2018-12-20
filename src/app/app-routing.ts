import { Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { UploadComponent } from './components/upload/upload.component';
import { DownloadComponent } from './components/download/download.component';

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
  		path: '**',
  		pathMatch: 'full',
  		redirectTo: 'login'
 	}
];