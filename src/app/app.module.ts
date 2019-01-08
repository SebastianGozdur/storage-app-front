import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ItemsManagerComponent } from './items-manager/items-manager.component';
import {AppRouteModule} from "./app-route/app-route.module";
import { ItemsViewerComponent } from './items-viewer/items-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsManagerComponent,
    ItemsViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouteModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
