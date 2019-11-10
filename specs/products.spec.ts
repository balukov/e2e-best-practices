// ================================================================================
// Products page tests
// ================================================================================

import { expect } from 'chai';

import index from '@pages/index.page';
import products from '@pages/products.page';

const productName = 'Sauce Labs Bolt T-Shirt';

describe('Products page', () => {
  before('Open index page', () => {
    browser.url('');
    index.loginForm().authStandardUser();
  });

  it('Product should be added to cart', () => {
    products.list().addToCart(productName);

    expect(products.list().getButton(productName)).to.equal('REMOVE');
  });
});
