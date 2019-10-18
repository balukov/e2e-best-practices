class NavigationMenu {
  private contactUs = () => $('//*[@id="contact-link"]');
  private signIn = () => $('//*[@id="contact-link"]');

  clickContactUs() {
    this.contactUs().click();
  }

  clickSignIn() {
    this.signIn().click();
  }
}

export default new NavigationMenu();
