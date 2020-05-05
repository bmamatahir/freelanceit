import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CompanyAddComponent} from './app/company/company-add/company-add.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CompanyAddComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
