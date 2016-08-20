import { Angular2ExamplePage } from './app.po';

describe('angular-2-example App', function() {
  let page: Angular2ExamplePage;

  beforeEach(() => {
    page = new Angular2ExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
