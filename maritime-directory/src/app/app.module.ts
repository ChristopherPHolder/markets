import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api-service/api.service';

function initializeDataFactory(api: ApiService): () => Promise<void> {
  return () => new Promise((resolve) => {
    api.getHighlightListings();
    resolve();
  });
} 

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
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
  bootstrap: [AppComponent]
})
export class AppModule { }
