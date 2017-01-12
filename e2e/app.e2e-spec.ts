import { AngularMaterial2StudyPage } from './app.po';

describe('angular-material2-study App', function() {
  let page: AngularMaterial2StudyPage;

  beforeEach(() => {
    page = new AngularMaterial2StudyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
