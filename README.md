# The boilerplate with advice best practices for e2e tests

## 1. Introduction

This project is not just the instruction about the best practices or just the boilerplate with ready to use code.
It's an alliance for both.
Code = advices, advices = code.
The code was written a total with this advice which contains specific examples from boilerplate.



If you don't understand the guide - look the code with full files.
If you don't understand how something works in the code - look this guide with the description and reasons why I did that.

The project is written using framework Webdriver.io for Node.js and Typescript.
But every advice can be used for other programming languages with adjustments.

The project uses the mock site https://www.saucedemo.com for demo tests.
To test your project you should modify the pages, components and, of course, tests.

All tests 100% work.


### 1.1. Installation

```
npm i
```

### 1.2. Running tests

```
npm test
```

## 2. Developers standards

The important thing that tests are a **project**. Not just a suite of tests which do some magic and talk "green" or "red". It's a real project with its architecture, rules of code, running, configuration. And for convenient maintenance, development, and teamwork you need to use the same rules as for the common project.

### 2.1. Typings

getButton(productName: string): string {
  const productIndex = this.getProductIndex(productName);
  return this.productButtons()[productIndex].getText();
}
```

  </details>
### 2.2. Static code analysis (Linter)




### 2.3. Prettier

Prettier makes code beautiful and consistently if many developers work with the project.

### 2.4. Autorun

Husky runs linter and prettier automatically before commit because without autorun everybody forgets runs.

## 3. Project structure

<!-- Test suite -> tests -> pages -> components -> steps -> selector actions -> selectors -->

### 3.1. Folder "tests" structure

There are two options for storing tests in files: app-pages and app-actions.

#### 3.1.1 App-pages

App divides to real pages, each file contains tests for the page where did the last action in the test. Simple to start, complicate continue.



- test -> pages -> components -> steps -> selector actions -> selectors
- special folders for tests, pages and components


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
### 4.2. Test structure

#### 4.2.1. Import pages what you need in the test at top file

  <details>
  <summary>Real example</summary>

  ```typescript
  // specs/products.spec.ts

  import index from '@pages/index.page';
  import products from '@pages/products.page';
  ```

  </details>


  <details>
  <summary>Real example</summary>

  ```typescript
  // specs/products.spec.ts
#### 4.2.2. One describe per file

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
#### 4.2.3. Use preconditions

- test step structure: page.component.step

  <details>
  <summary>Real example</summary>

  ```typescript
  // specs/products.spec.ts

  index.loginForm().authStandardUser();

  products.list().addToCart(productName);
  ```


- import all components for page

  <details>
  <summary>Real example</summary>
#### 4.2.4 Test step structure: page.component.step

  ```typescript
  // pages/products.page.ts

  import list from '@components/list.page';
  ```

  </details>


- let xPath for components and add the path to begin the every interact element

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
### 4.3. Page structure

#### 4.3.1 Import all components for page

- use XPath
- set asterisk for selectors - it helps if the app will be refactored

  <details>
  <summary>Real example</summary>

  ```typescript
  private product = '//*[@class="inventory_item"]';
  ```

  </details>

- Add "data-test" for elements where it's possible.
  Ask developers or do it yourself. It makes the call selectors easier.

  <details>
  <summary>Real example</summary>

  ```html
  <!-- element on page -->
  <input type="text" class="form_input" data-test="username" id="user-name" placeholder="Username" value="" />
  ```
### 4.4. Component structure

  ```typescript
  // selector
  private username = () => $('//*[@data-test="username"]');
  ```
#### 4.4.1. All selectors begin with the component selector

  </details>




```
#### 4.4.2. Component file contains steps, selector actions, selectors

### 4.5. Selector structure

#### 4.5.1. Use XPath

#### 4.5.2. Set asterisk for selectors
```


#### 4.5.3. Add "data-test" for elements where it's possible.
```
```
