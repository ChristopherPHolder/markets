import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

import { HighlightListingsPreviews } from '@markets/api-service';
import * as _highlightListingsPreviews from '../assets/mock-data.json';

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
      const mockHighlightListingsPreviews: HighlightListingsPreviews = _highlightListingsPreviews;
      expect(service.getHighlightListings()).toEqual(mockHighlightListingsPreviews);
    });
  });
});
