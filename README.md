# Image Electronics – E-commerce Test Automation Project

## Project Overview

This is a portfolio project focused on automating the functional testing of an e-commerce website, [Image Electronics](https://www.imageelectronics.com.np/).

The primary goal is to demonstrate practical skills in software testing, test automation, framework development, and automation design patterns.

The project follows a progressive approach, starting with **Cypress**, followed by implementing the same test scenarios using **Selenium WebDriver** and **Playwright**.

Rather than focusing only on writing test cases, the project emphasizes building maintainable, reusable, and scalable automation frameworks.

## Project Objectives

- Automate important e-commerce user journeys.
- Implement the Page Object Model (POM) design pattern.
- Develop reusable custom Cypress commands.
- Practice UI testing, assertions, and test organization.
- Handle real-world application issues, including asynchronous behavior and cross-origin navigation.
- Build automation frameworks using three different tools.
- Maintain clean, readable, and reusable test code.
- Showcase practical QA Automation Engineer skills through GitHub.

## Technology Stack

| Technology | Purpose |
|---|---|
| JavaScript | Programming language |
| Cypress | UI test automation |
| Node.js | JavaScript runtime |
| Page Object Model | Test framework design |
| Git & GitHub | Version control and project hosting |
| Selenium WebDriver | Planned automation implementation |
| Playwright | Planned automation implementation |

## Project Structure – Cypress

The initial Cypress framework follows a Page Object Model structure.

```text
Image-Electronics-Automation/
│
├── cypress/
│   ├── e2e/
│   │   └── home.cy.js
│   │
│   ├── fixtures/
│   │
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── SearchPage.js
│   │   ├── ProductPage.js
│   │   └── CartPage.js
│   │
│   └── support/
│       ├── commands.js
│       └── e2e.js
│
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

*Note: This represents the planned/current framework organization. Update filenames as additional page objects and test files are created.*

## Progress and Completed Work

### Phase 1 – Project Setup and Framework Configuration

- [x] Set up the Cypress automation project.
- [x] Configure Cypress.
- [x] Configure the base URL.
- [x] Create the initial test directory structure.
- [x] Implement the Page Object Model.
- [x] Create the initial HomePage and SearchPage classes.

### Phase 2 – Homepage and Search Functionality

- [x] Visit the homepage.
- [x] Verify homepage URL and title.
- [x] Search for products using the search bar.
- [x] Verify search results URL.
- [x] Verify search page title.
- [x] Verify the search input value.
- [x] Verify that search results are displayed.
- [x] Validate product titles in search results.

### Phase 3 – Product and Cart Functionality

- [x] Open a product from search results.
- [x] Add a product to the shopping cart.
- [x] Verify cart success notification.
- [x] Navigate to the cart.
- [x] Implement cart page object methods.
- [x] Test the Continue Shopping functionality.
- [x] Verify Continue Shopping redirection.
- [x] Verify product navigation from the cart.
- [x] Create reusable cart navigation functionality.

### Current Work in Progress

**Multiple Products in Shopping Cart**

- [x] Add the first product to the cart.
- [x] Navigate back using Continue Shopping.
- [x] Search for a different product (LG).
- [ ] Add the second product successfully.
- [ ] Verify both products appear in the cart.
- [ ] Remove multiple products.
- [ ] Verify the cart is empty after removal.

Current technical challenges:
- Handling the website's `www` to non-`www` origin redirection.
- Managing Cypress cross-origin commands using `cy.origin()`.
- Investigating the application's `AjaxCartFailure` JavaScript exception.
- Verifying that cart operations succeed despite application-side JavaScript errors.

These issues are being investigated as part of the ongoing automation development.

## Upcoming Work – Cypress Automation

### Phase 4 – Complete Cart Functionality

- [ ] Add multiple different products to the cart.
- [ ] Verify multiple products in the cart.
- [ ] Remove individual products.
- [ ] Remove multiple products.
- [ ] Verify empty cart behavior.
- [ ] Validate product quantities.
- [ ] Validate cart subtotal and total calculations.
- [ ] Test quantity updates.

### Phase 5 – Wishlist Functionality

- [ ] Add a product to the wishlist.
- [ ] Verify the product appears in the wishlist.
- [ ] Remove a product from the wishlist.
- [ ] Verify empty wishlist behavior.

### Phase 6 – Product Comparison

- [ ] Add products to comparison.
- [ ] Verify comparison products.
- [ ] Compare product information.
- [ ] Remove products from comparison.

### Phase 7 – Negative Testing

- [ ] Search with invalid product names.
- [ ] Search with empty input.
- [ ] Test invalid product navigation.
- [ ] Test cart behavior with unavailable products.
- [ ] Validate appropriate error messages.

### Phase 8 – Authentication

- [ ] User registration.
- [ ] Login with valid credentials.
- [ ] Login with invalid credentials.
- [ ] Logout functionality.
- [ ] Validate required fields.
- [ ] Validate authentication error messages.

### Phase 9 – Checkout Functionality

- [ ] Proceed to checkout.
- [ ] Validate checkout information.
- [ ] Validate required checkout fields.
- [ ] Test shipping and billing information.
- [ ] Validate order summary.
- [ ] Test order placement where the website supports a safe test flow.

### Phase 10 – Framework Improvements

- [ ] Improve reusable custom commands.
- [ ] Refine Page Object Model implementation.
- [ ] Improve test data management using fixtures.
- [ ] Add reusable assertions.
- [ ] Implement appropriate test hooks.
- [ ] Improve error handling.
- [ ] Review test independence and maintainability.
- [ ] Generate and review Cypress test reports.
- [ ] Explore CI/CD integration using GitHub Actions.

## Future Automation Implementations

After completing the Cypress implementation, the same e-commerce test scenarios will be automated using other popular frameworks.

### Selenium WebDriver

- Recreate the Cypress test scenarios using Selenium.
- Implement Page Object Model.
- Develop reusable methods.
- Practice explicit waits and synchronization.
- Generate test execution reports.

### Playwright

- Recreate the same scenarios using Playwright.
- Implement Page Object Model.
- Explore fixtures and reusable test utilities.
- Practice auto-waiting and cross-browser testing.
- Generate test execution reports.

## Final Project Goals

By the end of this project, the repository aims to demonstrate:

1. Practical knowledge of Cypress, Selenium, and Playwright.
2. Understanding of automation framework architecture.
3. Experience implementing Page Object Model.
4. Ability to automate real-world e-commerce workflows.
5. Knowledge of positive and negative testing.
6. Experience debugging application and automation errors.
7. Reusable and maintainable automation code.
8. Test reporting and CI/CD integration.

## Learning Approach

This project is being developed incrementally, with each functionality implemented, executed, debugged, and validated before moving to the next.

The emphasis is on understanding the automation concepts and writing maintainable code rather than simply completing test cases.

## Project Status

**Current Framework:** Cypress

**Current Focus:** E-commerce cart functionality

**Future Frameworks:** Selenium WebDriver and Playwright

**Project Type:** Personal QA Automation Portfolio Project

**Application Under Test:** [Image Electronics](https://www.imageelectronics.com.np/)

---

*This README will be updated as new test scenarios, framework improvements, and automation implementations are completed.*
