# The boilerplate with advice best practices for e2e tests

## 1. Introduction

This project is not just the instruction about the best practices or just the boilerplate with ready to use code.
It's an alliance for both.
Code = advices, advices = code.
The code was written a total with this advice which contains specific examples from boilerplate.

All examples are hidden under text with arrow like this:

 <details>
 <summary>Real example (click for expand)</summary>

---

```
example of the code
```

Explanation if necessary

[Link to the real place in the file with this code]()

---

 </details>

If you don't understand the guide - look the code with full files.
If you don't understand how something works in the code - look this guide with the description and reasons why I did that.

The project is written using framework Webdriver.io for Node.js and Typescript.
But every advice can be used for other programming languages with adjustments.

The project uses the mock site https://www.saucedemo.com for demo tests.
To test your project you should modify the pages, components and, of course, tests.

All tests 100% work.

Feel free to create issues with questions and additions.

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

If your language support typings it is necessary to use it - fewer bugs in developing, smart suggests. This project uses Typescript and typings uses everywhere.

 <details>
 <summary>Real example</summary>

---

```typescript
getButton(productName: string): string {
 const productIndex = this.getProductIndex(productName);
 return this.productButtons()[productIndex].getText();
}
```

Function getButton() can take an only string and return only strings.

[pages/components/list.page.ts](pages/components/list.page.ts#L34)

---

 </details>

### 2.2. Static code analysis (Linter)

It helps to avoid common language mistakes, make rules specifically for the project.

 <details>
 <summary>Real example</summary>

---

```json
 "mocha-avoid-only": true
```

The rule does not allow us to commit to the repository .only (). Because only tests with .only () will be run. And we want to run all.

[tslint.json](tslint.json#L13)

---

 </details>

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

<details>
<summary>Real example</summary>

---

```
.
├── ...
├── specs # Test files
│ ├── index.spec # Tests for index page
│ ├── products.spec # Tests for product page
│ └── cart.spec # Tests for cart page
└── ...
```

---

</details>

#### 3.1.2. App-actions

App divides to user action parts, imagine how a user can use your app. Complicate to start, simple to continue.

<details>
<summary>Example</summary>

---

```
.
├── ...
├── specs # Test files
│ ├── download.spec # Tests for downloads files
│ ├── crud-goods.spec # Create-Read-Update-Delete for item
│ └── purchase-cancel.spec # Cancelation actions
└── ...
```

---

</details>

### 4.2. Test structure

#### 4.2.1. Import pages what you need in the test at top file

<details>
<summary>Real example</summary>

---

```typescript
import index from '@pages/index.page';
import products from '@pages/products.page';
```

[specs/products.spec.ts](specs/products.spec.ts#L7)

---

</details>

#### 4.2.2. One describe per file

<details>
<summary>Real example</summary>

---

```typescript
describe('Products page', () => {
 // tests
}
```

[specs/products.spec.ts](specs/products.spec.ts#L12)

---

</details>

#### 4.2.3. Use preconditions

Actions in app which should be done before test starts. Usually these are: open app URL -> authorization -> open page for a test (if it is needed)

<details>
<summary>Real example</summary>

---

```typescript
before('Open index page', () => {
  browser.url('');
  index.loginForm().authStandardUser();
});
```

[specs/products.spec.ts](specs/products.spec.ts#L13)

---

</details>

#### 4.2.4 Test step structure: page.component.step

<details>
<summary>Real example</summary>

---

```typescript
index.loginForm().authStandardUser();
```

page is "index"
component is "loginForm"
step is "authStandardUser"

[specs/products.spec.ts](specs/products.spec.ts#L15)

```typescript
products.list().addToCart(productName);
```

page is "products"
component is "list"
step is "addToCart"

[specs/products.spec.ts](specs/products.spec.ts#L19)

---

</details>

### 4.3. Page structure

#### 4.3.1 Import all components for page

<details>
<summary>Real example</summary>

---

```typescript
import list from '@components/list.page';
```

[pages/products.page.ts](pages/products.page.ts#L1)

---

</details>

### 4.4. Component structure

#### 4.4.1. All selectors begin with the component selector

Let xPath for components and add the path to begin the every interact element

<details>
<summary>Real example</summary>

---

```typescript
private list = () => $('//*[@class="inventory_list"]');

private productNames = () => this.list().$$(`//*[@class="inventory_item_name"]`);
private productButtons = () => this.list().$$(`//*[contains(@class,"btn_inventory")]`);
```

[pages/components/list.page.ts](pages/components/list.page.ts#L6)

---

</details>

#### 4.4.2. Component file contains steps, selector actions, selectors

### 4.5. Selector structure

#### 4.5.1. Use XPath

#### 4.5.2. Set asterisk for selectors

It helps if the app will be refactored

<details>
<summary>Real example</summary>

---

```typescript
private list = () => $('//*[@class="inventory_list"]');
```

[pages/components/list.page.ts](pages/components/list.page.ts#L6)

---

</details>

#### 4.5.3. Add "data-test" for elements where it's possible.

Ask developers or do it yourself. It makes the call selectors easier.

<details>
<summary>Real example</summary>

---

```html
<!-- element on page -->
<input type="text" class="form_input" data-test="username" id="user-name" placeholder="Username" value="" />
```

```typescript
// selector
private username = () => $('//*[@data-test="username"]');
```

[pages/components/login-form.page.ts](pages/components/login-form.page.ts#L6)

---

</details>

