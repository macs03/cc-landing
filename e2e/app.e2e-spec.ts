import { CcLandingPage } from './app.po';

describe('cc-landing App', function() {
  let page: CcLandingPage;

  beforeEach(() => {
    page = new CcLandingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
