import homePage from "../pages/homePage";
import searchPage from "../pages/searchPage";
import productPage from "../pages/productPage";
import cartPage from "../pages/cartPage";

describe('Image Electronics - Home Page',() => { //--naming Test suite
    beforeEach(() => {
    cy.visit('/');
    });

    /*it('should display TV products when user searches for TV',() => { 
        cy.url().should('eq', 'https://www.imageelectronics.com.np/');
        cy.title().should('contain', 'Image Electronics | Shop Appliances Online');

        homePage.searchBox().should('be.visible').type('TV');
        homePage.searchButton().click();
        cy.url().should('include','/search?q=TV');
        cy.title().should('contain','Search');
        searchPage.searchKeyword().should('have.value','TV');
        searchPage.products().should('have.length.greaterThan', 0);
        searchPage.productTitles().each(($product)=>{
            cy.wrap($product).should('be.visible');
        })
        searchPage.productTitles().each(($product)=>{
            cy.wrap($product).should('not.be.empty');
        })
        
    });*/

    /*it('should open product details when user clicks a product', () => {
        cy.searchAndOpenFirstProduct('TV');
        cy.url().should('not.include', '/search?q=TV');

        productPage.productTitle().should('be.visible').and('not.be.empty');
        productPage.productPrice().should('be.visible').and('not.be.empty');
        productPage.addToCartButton().should('be.visible').and('contain.text','Add to cart');
    }); */

    /*it('should add a product to the cart and then remove ',() => {
         cy.searchAndOpenFirstProduct('TV');

         productPage.addToCartButton().click();
         productPage.cartSuccessNotification().find('a').click();
         cy.url().should('include', '/cart');
         
         productPage.cartProductName().should('be.visible').and ('not.be.empty');
         productPage.cartQuantity().should('have.value', '1');
         productPage.removeFromCartButton().click();
            cy.get('.no-data')
                .should('be.visible')
                .and('contain.text', 'Your Shopping Cart is empty!'); 
            
            })

    })*/

    /*it('should update the quantity and verify the updated subtotal ',() => {
         cy.searchAndOpenFirstProduct('TV');
         cy.addProductAndOpenCart();

         productPage.cartQuantity().should('have.value', '1');
 
         productPage.cartProductSubTotal()
            .invoke('text')
            .then((subtotalText) => {
            const initialSubtotal =Number(subtotalText.replace('Rs.', '').replace(/,/g,'').trim()
          );

            cy.wrap(initialSubtotal).as ('initialSubtotal');

         productPage.cartQuantity().clear().type('2{enter}');
         productPage.cartQuantity().should('have.value', '2');
         productPage.cartProductSubTotal()
            .invoke('text').then((subtotalText) => {
            const updatedSubtotal = Number(subtotalText.replace('Rs.','').replace(/,/g,'').trim()
          );

            cy.get('@initialSubtotal').then((initialSubtotal) => {
                expect(updatedSubtotal).to.equal(initialSubtotal * 2);
            

            }); 
    });*/

       /* it('should navigate to the homepage when user clicks Continue Shopping',() => {
            cy.searchAndOpenFirstProduct('TV');
            cy.addProductAndOpenCart();
            cy.url().should('include', '/search?q=TV');
        })*/

        /*it ('should navigate back to product page from cart',() =>{
            cy.searchAndOpenFirstProduct('TV');
            cy.addProductAndOpenCart();
            productPage.cartProductName().click();
            cy.url().should('include', '/lg-32lq630b-32-inch-hd-ready-smart-led-tv');
        })*/

        it ('should allow multiple products to be added to cart',() => {
                cy.searchAndOpenFirstProduct('TV');
                productPage.addToCartButton().click();
                productPage.cartSuccessNotification().should('be.visible').find('a').click();
                cartPage.continueShoppingButton().click();

                cy.origin('https://imageelectronics.com.np', () => {

                    cy.on('uncaught:exception', (err) => {
                        if(err.message.includes('AjaxCartFailure')) {
                            return false;
                        
                        }
                    })
                    cy.window().then(() => {
                    cy.get('#small-searchterms').clear().type('LG');
                    cy.get('.search-box-button').click();
                    cy.get('.product-title').first().click();
                    cy.get('.add-to-cart-button').click();
                    })
                });
                
                cy.visit('/cart');
        })
    
});

