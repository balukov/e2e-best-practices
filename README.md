# The boilerplate project with advice best practices for e2e tests

This project is not just instruction about best practices or just boilerplate with ready to use code. It's an alliance for both. The code was written total with these instructions and instructions contain specific examples from boilerplate.

If you don't understand how somesthing work in the code - look this guide with description and reasons why I did that. If you don't understand guide - look the code with full files.

The project is written using framework Webdriver.io for Node.js and Typescript. But every advice can be use for other programming languages with the addition of adjustments.

The project uses the mock site https://www.saucedemo.com for demo tests. To test your project you should modify the pages, components and, of course, tests.

All tests 100% work.

## Features

### 1. Developers standards

The important thing that tests are a project. Not just a suite of tests which do some magic and talk "green" or "red". It's a real project with its architecture, rules of code, running, configuration

#### 1.1. Typings

Use typings - fewer bugs in developing, smart suggests

  <details>
  <summary>Real example</summary>

```typescript
// pages/components/list.page.ts

getButton(productName: string): string {
  const productIndex = this.getProductIndex(productName);
  return this.productButtons()[productIndex].getText();
}
```

  </details>

#### 1.2. Linter

Static analysis of code doesn't

#### 1.3. Prettier

Prettier makes code beautiful and consistently if many developers work with the project.

#### 1.4. Autorun

Husky runs linter and prettier automatically before commit because without autorun everybody forgets runs.

### 2. Page object component system

#### 2.1. Project structure

- test -> pages -> components -> steps -> selector actions -> selectors
- special folders for tests, pages and components

#### 2.2. Test structure

- there are two types of tests system: app-pages and app-actions.

  - App-pages (simple start -> complicate continue): app divides to real pages, each file contain tests for the page where did the last action in the test

    <details>
    <summary>Real example</summary>

    ```
    .
    ├── ...
    ├── specs                       # Test files
    │   ├── index.spec              # Tests for index page
    │   ├── products.spec           # Tests for product page
    │   └── cart.spec               # Tests for cart page
    └── ...
    ```

    </details>

  - App-actions (complicate start -> simple continue) - app divides to user actions parts, imagine how user can use your app

    <details>
    <summary>Example</summary>

    ```
    .
    ├── ...
    ├── specs                       # Test files
    │ ├── download.spec             # Tests for downloads files
    │ ├── crud-goods.spec           # Create-Read-Update-Delete for item
    │ └── purchase-cancel.spec      # Cancelation actions
    └── ...
    ```

    </details>

- import pages what you need at top file

  <details>
  <summary>Real example</summary>

  ```typescript
  // specs/products.spec.ts

  import index from '@pages/index.page';
  import products from '@pages/products.page';
  ```

  </details>

- one describe per file

  <details>
  <summary>Real example</summary>

  ```typescript
  // specs/products.spec.ts

  describe('Products page', () => {
    ...
  }
  ```

  </details>

- preconditions: open app URL, authorization, open page for a test

  <details>
  <summary>Real example</summary>

  ```typescript
  // specs/products.spec.ts

  before('Open index page', () => {
    browser.url('');
    index.loginForm().authStandardUser();
  });
  ```

  </details>

- test step structure: page.component.step

  <details>
  <summary>Real example</summary>

  ```typescript
  // specs/products.spec.ts

  index.loginForm().authStandardUser();

  products.list().addToCart(productName);
  ```

#### 2.3. Page structure

- import all components for page

  <details>
  <summary>Real example</summary>

  ```typescript
  // pages/products.page.ts

  import list from '@components/list.page';
  ```

  </details>

#### 2.4. Component structure

- let xPath for components and add path to the every interact element

  <details>
  <summary>Real example</summary>

  ```typescript
  // pages/components/list.page.ts

  private list = () => $('//*[@class="inventory_list"]');

  private productNames = () => this.list().$$(`//*[@class="inventory_item_name"]`);
  private productButtons = () => this.list().$$(`//*[contains(@class,"btn_inventory")]`);
  ```

  </details>

- component file contains steps, selector actions, selectors

#### 2.5. Selectors

- use XPath
- set asterisk for selectors - it helps if the app will be refactored

  <details>
  <summary>Real example</summary>

  ```typescript
  private product = '//*[@class="inventory_item"]';
  ```

  </details>

- Add data-test for elements where it's possible.
  Ask developers or do it yourself. It makes the call selectors easier.

  <details>
  <summary>Real example</summary>

  ```html
  <!-- element on page -->
  <input type="text" class="form_input" data-test="username" id="user-name" placeholder="Username" value="" />
  ```

  ```typescript
  // selector
  private username = () => $('//*[@data-test="username"]');
  ```

  </details>

### Coming soon

- Clear and readable report
- Accessibility tests
- Visual comparison tests
- Docker container for CI

## Installation

```
npm i
```

## Running tests

```
npm test
```
