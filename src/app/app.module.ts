import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import {HttpClientModule} from '@angular/common/http';
import { GridMovableComponent } from './components/grid-movable/grid-movable.component';
@NgModule({
  declarations: [
    AppComponent,
    GridMovableComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
