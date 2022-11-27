import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ListingPreview } from '@markets/api-service';
import * as _listing from '../assets/previews-watercraft.json';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getListingPreviews', () => {
    it('should return Mocked listings', () => {
      const appController = app.get<AppController>(AppController);
      const mockListingPreviews: ListingPreview[] = _listing.previews;
      expect(appController.getListingPreviews()).toEqual(mockListingPreviews);
    });
  });
});
