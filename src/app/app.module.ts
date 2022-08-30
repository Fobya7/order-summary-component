import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OrderSummaryModule } from './order-summary/order-summary.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OrderSummaryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
