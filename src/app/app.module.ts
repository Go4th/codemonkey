import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseProvider } from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';

import { AuthService } from './services/auth.service';
import { AppRoutes } from './app.routes';

import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    AppRoutes
  ],
  providers: [AngularFireDatabaseProvider, AuthService, AngularFireAuthModule, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
