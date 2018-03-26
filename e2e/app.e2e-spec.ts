import { CMOrderPage } from './app.po';

describe('cmorder App', () => {
  let page: CMOrderPage;

  beforeEach(() => {
    page = new CMOrderPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
