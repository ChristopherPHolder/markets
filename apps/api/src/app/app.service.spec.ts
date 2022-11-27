import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

import { ListingPreview } from '@markets/api-service';
import * as _listing from '../assets/previews-watercraft.json';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      const mockListingPreviews: ListingPreview[] = _listing.previews;
      expect(service.getListingPreviews()).toEqual(mockListingPreviews);
    });
  });
});
