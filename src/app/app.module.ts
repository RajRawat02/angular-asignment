import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { UserPipe } from './username.pipe'
import {OrderBy} from './sort.pipe'
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule,NgxPaginationModule ],
  declarations: [ AppComponent,UserPipe,OrderBy],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
