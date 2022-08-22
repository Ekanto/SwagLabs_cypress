/// <reference types="Cypress" />


describe('Title and DDT', () => {

    before(() => {
        cy.visit('https://www.saucedemo.com/')
    })


    it('#Test_1: Title Test', () => {

        cy.title().should('eq', 'Swag Labs')
        cy.log('Title passed successfully')
    })

    it('#Test_2: Login Test', () => {
        var credentials = require('../fixtures/credentials.json')
        var count = Object.keys(credentials.data).length;
        for (let i = 0; i < count; i++) {
            cy.fixture('credentials').then((credentials) => {
                var uname = credentials.data[i].username
                var pword = credentials.data[i].password
                cy.get('#user-name').type(uname)
                cy.get('#password').type(pword)
                cy.get('#login-button').click()
                cy.get('body').then(body => {
                    if (body.find('#login_button_container').length > 0) {
                        cy.log('Login Failed')
                        expect(body.find('#login_button_container')).to.exist
                        cy.get('.error-button > .svg-inline--fa').click()
                    }
                    else {
                        cy.log('Login Passed')
                        cy.get('.title').should('be.visible')
                        cy.get('#react-burger-menu-btn').click()
                        cy.get('#logout_sidebar_link').click()
                        cy.log('Login Test passed successfully')

                    }
                })

            })
            cy.get('#user-name').clear()
            cy.get('#password').clear()
        }


    })
})
