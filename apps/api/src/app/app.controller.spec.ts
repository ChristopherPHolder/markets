import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { HighlightListingsPreviews } from '@markets/api-service';
import * as _highlightListingsPreviews from '../assets/mock-data.json';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getHighlightListings', () => {
    it('should return Mocked listings', () => {
      const appController = app.get<AppController>(AppController);
      const mockHighlightListingsPreviews: HighlightListingsPreviews = _highlightListingsPreviews;
      expect(appController.getHighlightListings()).toEqual(mockHighlightListingsPreviews);
    });
  });
});
