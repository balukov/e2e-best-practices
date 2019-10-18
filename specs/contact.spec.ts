import { expect } from 'chai';

import index from '@pages/index.page';
import contact from '@pages/contact.page';

const header = 'CUSTOMER SERVICE - CONTACT US';

describe('Contact page', () => {
  before('Open contact page', () => {
    browser.url('');
    index.navigationMenu().clickContactUs();
  });

  it('Contact page should contain title', () => {
    expect(contact.pageHeader().getTitle()).to.equal(header);
  });
});
