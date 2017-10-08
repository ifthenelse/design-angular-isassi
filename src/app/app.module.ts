import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClarityModule } from "clarity-angular";

import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { AccordionComponent } from './accordion/accordion.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ButtonComponent } from './button/button.component';
import { CalloutComponent } from './callout/callout.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
      AppComponent,
      AlertComponent,
      AccordionComponent,
      BreadcrumbComponent,
      ButtonComponent,
      CalloutComponent,
      DialogComponent,
  ],
  imports: [
    BrowserModule,
    ClarityModule.forRoot(),
  ],
  providers: [],
  //declarations: [AppComponent],
  bootstrap: [AppComponent],
  
})
export class AppModule { }