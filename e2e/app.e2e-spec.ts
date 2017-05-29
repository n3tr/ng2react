import { Ng2reactPage } from './app.po';

describe('ng2react App', () => {
  let page: Ng2reactPage;

  beforeEach(() => {
    page = new Ng2reactPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
