class PageHeader {
  private title = () => $('//h1');

  getTitle() {
    return this.title().getText();
  }
}

export default new PageHeader();
