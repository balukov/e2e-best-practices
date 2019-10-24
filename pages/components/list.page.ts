class List {
  // ================================================================================
  // Selectors
  // ================================================================================

  private list = () => $('//*[@class="inventory_list"]');

  private productNames = () => this.list().$$(`//*[@class="inventory_item_name"]`);
  private productButtons = () => this.list().$$(`//*[contains(@class,"btn_inventory")]`);

  // ================================================================================
  // Selector actions
  // ================================================================================

  private getProductIndex(productName: string) {
    let productIndex = 0;
    this.productNames().some((element, index) => {
      if (element.getText() === productName) {
        productIndex = index + 1;
      }
    });
    return productIndex;
  }

  // ================================================================================
  // Steps
  // ================================================================================

  addToCart(productName: string) {
    const productIndex = this.getProductIndex(productName);
    this.productButtons()[productIndex].click();
  }

  getButton(productName: string): string {
    const productIndex = this.getProductIndex(productName);
    return this.productButtons()[productIndex].getText();
  }
}

export default new List();
