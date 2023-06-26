import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrattionComponent } from './registration/registrattion.component';
import { UserRegistationService } from './user-registrattion.service';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    RegistrattionComponent,
    SearchDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserRegistationService],
  bootstrap: [AppComponent]
})
export class AppModule { }