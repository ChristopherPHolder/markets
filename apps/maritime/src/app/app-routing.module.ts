import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { featuresRoutes } from "@markets/features";

const routes: Routes = featuresRoutes;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
