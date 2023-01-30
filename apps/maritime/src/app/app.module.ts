import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiService } from 'data-access';
import { HeaderComponent } from "ui";

function initializeDataFactory(api: ApiService): () => Promise<void> {
  return () => new Promise((resolve) => {
    api.addPreloadLCPLinks();
    resolve();
  });
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    ApiService,
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: initializeDataFactory,
      deps: [ApiService]
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
