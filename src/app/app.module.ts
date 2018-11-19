import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { ApiService } from './services/api.service';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyRangeComponent } from './currency-range/currency-range.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyListComponent,
    CurrencyRangeComponent,
    AlertDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    CurrencyRangeComponent,
    AlertDialogComponent
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
