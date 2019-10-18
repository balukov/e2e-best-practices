import { expect } from 'chai';

import index from '@pages/index.page';

const title = () => $('//h1');

describe('Contact form', () => {
  before('Open contact form', () => {
    browser.url('');

    index.navigationMenu().clickContactUs();
  });

  it('Contact form should contain title', () => {
    expect(title().getText()).to.equal('CUSTOMER SERVICE - CONTACT US');
  });
});
