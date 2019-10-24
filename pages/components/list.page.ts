class List {
  // ================================================================================
  // Selectors
  // ================================================================================

  private product = '//*[@class="inventory_item"]';

  private addToCartButton = (i: number) => $(`${this.product}[${i}]//*[contains(@class,"btn_inventory")]`);
  private productList = () => $$(`${this.product}//*[@class="inventory_item_name"]`);

  // ================================================================================
  // Selector actions
  // ================================================================================

  private getProductIndex(productName: string) {
    let productIndex = 0;
    this.productList().some((element, index) => {
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
    this.addToCartButton(productIndex).click();
  }

  getButton(productName: string) {
    const productIndex = this.getProductIndex(productName);
    return this.addToCartButton(productIndex).getText();
  }
}

export default new List();
