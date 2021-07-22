import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MiddleComponent } from './middle/middle.component';
import { BottomComponent } from './bottom/bottom.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDQddbSJjbj8y-N4jScqUjRwoNkv3sLDPo",
  authDomain: "blive-60adf.firebaseapp.com",
  projectId: "blive-60adf",
  storageBucket: "blive-60adf.appspot.com",
  messagingSenderId: "12276376128",
  appId: "1:12276376128:web:c95be5950374980faa35a5",
  measurementId: "G-24MVNSJLG8"
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MiddleComponent,
    BottomComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
