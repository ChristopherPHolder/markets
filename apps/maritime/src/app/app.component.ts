import { AfterViewInit, Component, ViewChild, ViewContainerRef, ViewEncapsulation } from "@angular/core";

@Component({
  selector: 'markets-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements AfterViewInit {
  @ViewChild("footerComponent", { read: ViewContainerRef })
  footerComponent!: ViewContainerRef;
  title = 'maritime';
  ngAfterViewInit(): void {
      this.loadFooter();
  }

  async loadFooter() {
    const lazyFooterComponent = await import("@markets/ui/footer").then(c => c.c);
    this.footerComponent.clear();
    this.footerComponent.createComponent(lazyFooterComponent);
  }
}
