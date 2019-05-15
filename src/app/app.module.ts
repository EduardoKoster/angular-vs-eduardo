import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MaterialsModule } from './materials.module';

import { AppRoutingModule }     from './app-routing.module';

import {AgGridModule} from "ag-grid-angular/main";

import { AppComponent } from './app.component';

import { BasicScrollComponent } from './basic-scroll/basic-scroll.component';
import { BasicVirtualScrollComponent } from './basic-virtual-scroll/basic-virtual-scroll.component'
import { AgGridScrollComponent } from './ag-grid-scroll/ag-grid-scroll.component'

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialsModule,
    ScrollingModule,
    AgGridModule
  ],
  declarations: [
    AppComponent,
    BasicScrollComponent,
    BasicVirtualScrollComponent,
    AgGridScrollComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }