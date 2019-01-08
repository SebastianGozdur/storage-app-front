import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {ItemsManagerComponent} from "../items-manager/items-manager.component";
import {ItemsViewerComponent} from "../items-viewer/items-viewer.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: ItemsManagerComponent},
  { path: 'list', component: ItemsViewerComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouteModule { }
