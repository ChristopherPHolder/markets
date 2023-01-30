import { TestBed } from '@angular/core/testing';

//import { ApiService } from './api.service';
import { LinkService } from "external-resource-link";

// @TODO separate the link-service and the data access logic
describe('ApiService', () => {
  //let apiService: ApiService;
  let linkService: LinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    linkService = TestBed.inject(LinkService);
    //apiService = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(linkService).toBeTruthy();
  });
});
