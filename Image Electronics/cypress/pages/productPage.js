class ProductPage{
    productTitle(){
        return cy.get('.product-name h1');
    }
    productPrice(){
        return cy.get('.product-price .price-value-123');
    }
    addToCartButton(){
        return cy.get('.add-to-cart-button');
    }
    cartSuccessNotification(){
        return cy.get('#bar-notification');
    }
    cartProductName(){
        return cy.get('.cart .product-name');
    }
    cartQuantity() {
    return cy.get('.cart .qty-input');
    }
    removeFromCartButton() {
    return cy.get('.cart .remove-btn');
    }
    cartProductSubTotal(){
        return cy.get('.cart .product-subtotal');
    }
}
export default new ProductPage();