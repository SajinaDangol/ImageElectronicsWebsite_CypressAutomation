class SearchPage{
    searchKeyword(){
        return cy.get('#q');
    }
    products(){
        return cy.get('.product-item');
    }
    productTitles(){
        return cy.get('.product-title');
    }
}
export default new SearchPage();