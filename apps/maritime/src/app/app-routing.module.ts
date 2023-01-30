import { NgModule } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { featuresRoutes } from "features";

@NgModule({
  imports: [RouterModule.forRoot(featuresRoutes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
