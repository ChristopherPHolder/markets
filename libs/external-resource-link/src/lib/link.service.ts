import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

export type LinkDefinition = {
  href?: string;
  imagesrcset?: string;
  imagesizes?: string;
  media?: string;
  rel?: string;
  type?: string;
  as?: string;
} & { [prop: string]: string };

const LINK_KEYS_MAP: { [prop: string]: string } = {};

@Injectable({ providedIn: 'root' })
export class LinkService {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  addLink(link: LinkDefinition): void {
    const element = this.document.createElement('link');
    this._setLinkElementAttributes(link, element);
    this._appendElementToHead(element);
  }

  private _setLinkElementAttributes(tag: LinkDefinition, el: HTMLLinkElement): void {
    Object.keys(tag).forEach((prop: string) => el.setAttribute(this._getLinkKeyMap(prop), tag[prop]));
  }

  private _getLinkKeyMap(prop: string): string {
    return LINK_KEYS_MAP[prop] || prop;
  }

  private _appendElementToHead(element: HTMLLinkElement): void {
    const head = this.document.getElementsByTagName('head')[0];
    head.appendChild(element);
  }
}
