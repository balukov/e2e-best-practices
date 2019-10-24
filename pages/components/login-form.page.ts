class LoginForm {
  // ================================================================================
  // Selectors
  // ================================================================================

  private username = () => $('//*[@data-test="username"]');
  private password = () => $('//*[@data-test="password"]');
  private loginButton = () => $('//*[@type="submit"]');

  // ================================================================================
  // Selector actions
  // ================================================================================

  setUsername() {
    return this.username().setValue('standard_user');
  }

  setPassword() {
    return this.password().setValue('secret_sauce');
  }

  // ================================================================================
  // Steps
  // ================================================================================

  authStandardUser() {
    this.setUsername();
    this.setPassword();
    this.loginButton().click();
  }
}

export default new LoginForm();
