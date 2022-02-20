require('cypress-xpath')
const data = './cypress/integration/data.json'

describe('Order product', () => {

    it('Sign in', () => {
        cy.visit('http://automationpractice.com')
        cy.get("a.login").click();
        cy.readFile(data).then((obj)=>{
            cy.get('#email').type(String(obj.email));
            cy.get('#passwd').type(String(obj.password));
            cy.get("#SubmitLogin").click();
        })
    })
    it('Search product', () => {
        cy.get('#search_query_top', { timeout: 10000 }).should('be.visible');
        cy.get("#search_query_top").type("shirt");
        cy.get("[name=submit_search]").click();
        cy.get(".product-container").eq(0).click();
        
    })
    it('Confirm order', () => {
        cy.get("img").eq(13).click();
        Cypress.on('uncaught:exception', (err, runnable) => {
           
            return false
          })
        
        cy.get("#add_to_cart").click();
        cy.xpath("//a[@class='button btn btn-default standard-checkout button-medium']//span[contains(text(),'Proceed to checkout')]").click();
       
        
    })
})