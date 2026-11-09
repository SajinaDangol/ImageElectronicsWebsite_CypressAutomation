class HomePage{
    searchBox(){
        return cy.get('#small-searchterms');
    }
    searchButton(){
        return cy.get('.search-box-button');
    }
    
}
export default new HomePage();
