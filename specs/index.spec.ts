import { expect } from 'chai';

import index from '@pages/index.page';

const phone = '0123-456-789';

describe('Index page', () => {
  before('Open index page', () => {
    browser.url('');
  });

  it('Index page should contain phone number', () => {
    expect(index.navigationMenu().getPhone()).to.equal(phone);
  });
});
