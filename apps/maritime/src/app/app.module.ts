import { APP_INITIALIZER, inject, NgModule, PLATFORM_ID } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ApiService, HighlightListingsPreviews } from "data-access";
import { LinkService } from "external-resource-link";
import { HeaderComponent } from "ui";
import { tap } from "rxjs";
import { isPlatformBrowser } from "@angular/common";

function initializeDataFactory(apiService: ApiService, linkService: LinkService): () => Promise<void> {
  const isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  return () => new Promise((resolve) => {
    if (isBrowser) {
      apiService.getHighlightListings().pipe(tap((listings: HighlightListingsPreviews) => {
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
    }
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
