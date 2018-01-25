import { Fitnesso2AngularPage } from './app.po';

describe('fitnesso2-angular App', () => {
  let page: Fitnesso2AngularPage;

  beforeEach(() => {
    page = new Fitnesso2AngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
