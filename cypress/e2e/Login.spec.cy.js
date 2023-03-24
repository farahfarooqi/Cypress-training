/// <reference types="cypress" /> 
describe('Login', () => {
    it('passes', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
      cy.get('input[name="username"]').type('Ali45')
      cy.get('input[name="password"]').type('12345')
      cy.get('input[value="Log In"]').click()
      
    })

    it('invalid credentials', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
      cy.get('input[name="username"]').type('Ali45')
      cy.get('input[name="password"]').type('12345')
      cy.get('input[value="Log In"]').click()
      
    })

    it('redirected to the account services', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
      cy.get('input[name="username"]').type('Ali45')
      cy.get('input[name="password"]').type('12345')
      cy.get('input[value="Log In"]').click()
      cy.url().should('eq','https://parabank.parasoft.com/parabank/overview.htm')
      
    })

    it('log out and login', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
      cy.get('input[name="username"]').type('Ali45')
      cy.get('input[name="password"]').type('12345')
      cy.get('input[value="Log In"]').click()
      cy.url().should('eq','https://parabank.parasoft.com/parabank/overview.htm')
      
    })
  })