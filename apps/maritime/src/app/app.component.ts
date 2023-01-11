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
  ngAfterViewInit() {
    setTimeout(() => {
      console.log("After view init 2s")
      this.loadFooter().then(() => console.log('loaded'));
    } , 2_000)
  }

  async loadFooter() {
    const lazyFooterComponent = await import("@markets/ui/footer").then(c => c.c);
    this.footerComponent.clear();
    this.footerComponent.createComponent(lazyFooterComponent);
  }
}
