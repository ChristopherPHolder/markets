import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiService } from 'data-access';
import { LinkService } from "external-resource-link";
import { HeaderComponent } from "ui";
import { tap } from "rxjs";

function initializeDataFactory(apiService: ApiService, linkService: LinkService): () => Promise<void> {
  return () => new Promise((resolve) => {
    apiService.getHighlightListings().pipe(tap((listings) => {
      if (!listings) return;
      performance.mark('Prefetching LCP Images');
      for (let i = 0; i < 2; i++) {
        linkService.addLink({
          rel: 'preload',
          as: 'image',
          href: listings["watercrafts"][i].thumbnailUrl,
          fetchpriority: 'high'
        });
      }
    })).subscribe();
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
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: initializeDataFactory,
      deps: [ApiService, LinkService]
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
