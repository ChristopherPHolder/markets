import { getFooter } from '../support/app.po';

describe('maritime', () => {
  beforeEach(() => cy.visit('/'));

  it('should display footer', () => {
    // Function helper example, see `../support/app.po.ts` file.
    getFooter().contains('Welcome maritime');
  });
});
