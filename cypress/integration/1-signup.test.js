const data = './cypress/integration/data.json'

describe('Account signup', () => {

    it('Click on signin button', () => {
        cy.visit('http://automationpractice.com')
        cy.title().should('eq', 'My Store')
        cy.get("a.login").click();
    })
    it('Register new account', () => {
        let randid = Math.floor(Math.random() * 1000)+1;
        let user_email = "testuser" + randid + "@grr.la";

        cy.readFile(data).then((obj) => {
            obj.email = user_email
            cy.writeFile(data, obj)
        })

        cy.get("#email_create").type(user_email);
        cy.get("#SubmitCreate").click();

    })
    it('Fillup form and register', () => {
        cy.get("#id_gender1").click();
        cy.get("#customer_firstname").type("Muntasir");
        cy.get("#customer_lastname").type("Mamun");
        cy.readFile(data).then((obj)=>{
            cy.get('#passwd').type(String(obj.password));
        })
        
        cy.get('#days').select('1');
        cy.get('#months').select('January');
        cy.get('#years').select('1990');
        cy.get('#address1').type("Gulshan-1, Dhaka, Bangladesh");
        cy.get('#city').type("Dhaka");
        cy.get('#id_state').select("Alabama");
        cy.get("#postcode").type("10001");
        cy.get('#phone_mobile').type("01532148470");
        cy.get('#alias').type("DHK");
        cy.get("#submitAccount").click();
        cy.contains("Sign out")

    })
})