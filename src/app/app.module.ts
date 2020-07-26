import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { IconDefinition } from '@ant-design/icons-angular';

import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon/public-api';

const icons: IconDefinition[] = [ AccountBookFill, AlertOutline, AlertFill ];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NzIconModule.forRoot(icons),
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
