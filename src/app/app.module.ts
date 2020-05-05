import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CompanyAddComponent} from './app/company/company-add/company-add.component';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './app/layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyAddComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
