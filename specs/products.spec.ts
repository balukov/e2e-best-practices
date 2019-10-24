// ================================================================================
// Products page tests
// ================================================================================

import { expect } from 'chai';

const productName = 'Sauce Labs Bolt T-Shirt';

import index from '@pages/index.page';
import products from '@pages/products.page';

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
