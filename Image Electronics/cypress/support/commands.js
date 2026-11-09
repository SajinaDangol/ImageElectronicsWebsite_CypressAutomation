import homePage from "../pages/homePage";
import productPage from "../pages/productPage";
import searchPage from "../pages/searchPage";

Cypress.Commands.add('searchAndOpenFirstProduct',(product) => {
    homePage.searchBox().should('be.visible').type(product);
    homePage.searchButton().click();

    searchPage.productTitles().first().click();
})

Cypress.Commands.add('addProductAndOpenCart', () =>{
    productPage.addToCartButton().click();
    productPage.cartSuccessNotification().find('a').click();
    cy.url().should('include', '/cart');
})