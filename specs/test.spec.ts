const reporter = require('@wdio/allure-reporter').default;
import { expect } from 'chai';

const contactUs = () => $('//*[@id="contact-link"]');
const title = () => $('//h1');

describe(`Contact form`, () => {
  before('Open contact form', () => {
    browser.url('');
    contactUs().click();
  });

  it('Contact form should contain title', () => {
    reporter.addFeature('Contact form');
    reporter.addStory('Title');

    expect(title().getText()).to.equal('CUSTOMER SERVICE - CONTACT US');
  });
});
