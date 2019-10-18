class NavigationMenu {
  private phone = () => $('//*[@class="shop-phone"]/strong');
  private contactUs = () => $('//*[@id="contact-link"]');
  private signIn = () => $('//*[@id="contact-link"]');

  clickContactUs() {
    this.contactUs().click();
  }

  clickSignIn() {
    this.signIn().click();
  }

  getPhone() {
    return this.phone().getText();
  }
}

export default new NavigationMenu();
