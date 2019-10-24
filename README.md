# Boilerplate project with best practices for e2e tests

This project is not just instruction about best practices or just boilerplate with code ready to use. It's an alliance for both. The code was written total with these instructions and instructions contain specific examples from boilerplate.  
The project is written using framework Webdriver.io for Node.js and Typescript. But every advice can be use for other programming languages with the addition of adjustments.  
The project uses the mock site https://www.saucedemo.com for demo tests. To test your project you should modify the pages, components and, of course, tests.

## Features

### 1. Developers standards

The important thing that tests are a project. Not just a suite of tests which do some magic and talk "green" or "red". It's a real project with its architecture, rules of code, running, configuration

#### 1.1. Typings

Fewer bugs in developing, smart suggest

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

    _Example_

    ```
    .
    ├── ...
    ├── specs                       # Test files
    │   ├── index.spec              # Tests for index page
    │   ├── products.spec           # Tests for product page
    │   └── cart.spec               # Tests for cart page
    └── ...
    ```

  - App-actions (complicate start -> simple continue) - app divides to user actions parts, imagine how user can use your app

    _Example_

    ```
    .
    ├── ...
    ├── specs                       # Test files
    │ ├── download.spec             # Tests for downloads files
    │ ├── crud-goods.spec           # Create-Read-Update-Delete for item
    │ └── purchase-cancel.spec      # Cancelation actions
    └── ...

    ```

- import pages what you need at top file

  _Example_

  ```
  import index from '@pages/index.page';
  import products from '@pages/products.page';
  ```

- one describe per file

  _Example_

  ```
  describe('Products page', () => {
    ...
  }
  ```

- preconditions: open app URL, authorization, open page for a test

  _Example_

  ```
  before('Open index page', () => {
    browser.url('');
    index.loginForm().authStandardUser();
  });
  ```

- test step structure: page.component.step

  _Example_

  ```
    index.loginForm().authStandardUser();
    products.list().addToCart(productName);
  ```

#### 2.3. Page structure

- import all components for page

  _Example_

  ```
  import topMenu from '@components/top-menu.page';
  import list from '@components/list.page';
  ```

#### 2.4. Component structure

- let component xPath
- component file contains steps, selector actions, selectors

#### 2.5. Selectors

- use XPath
- set asterisk for selectors - it helps if the app will be refactored
- add data-test for elements - ask developers or do it yourself it makes the call selectors easier

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
