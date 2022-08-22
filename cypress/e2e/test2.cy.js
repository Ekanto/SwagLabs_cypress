/// <reference types="Cypress" />


describe('DDT', () => {
it('Swag Labs', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.title().should('eq', 'Swag Labs')
    var credentials  =  require('../fixtures/credentials.json')
    var count  = Object.keys(credentials.data).length;
    for(let i=0;i<count;i++){
    cy.fixture('credentials').then((credentials) => {
        var uname =   credentials.data[i].username
        var pword =   credentials.data[i].password
        cy.get('#user-name').type(uname)
        cy.get('#password').type(pword)
        cy.get('#login-button').click()
        cy.get('.title').should('be.visible')
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click() 
    })
    cy.log('Test completed')
}
    
    
})
})
    