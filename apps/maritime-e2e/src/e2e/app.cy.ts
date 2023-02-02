import { getFooter, getHeader, getMain } from "../support/app.po";

describe('maritime', () => {
  beforeEach(() => cy.visit('/'));

  it('should display header', () => {
    getHeader();
  })

  it("should display main", () => {
    getMain();
  });

  it('should display footer', () => {
    getFooter()
  });
});
