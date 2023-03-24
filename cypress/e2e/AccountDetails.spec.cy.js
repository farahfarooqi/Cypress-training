/// <reference types="cypress" /> 
describe('Account Details', () => {
//login user before every case
beforeEach(()=>{
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.url().should('eq','https://parabank.parasoft.com/parabank/index.htm')
    .and('contain','parabank.parasoft')
     cy.contains('Register').click()
     cy.get('input[id="customer.firstName"]').type('Ali').should('have.value','Ali')
     cy.get('input[id="customer.lastName"]').type('sadiq').should('have.value','sadiq')
     cy.get('input[id="customer.address.street"]').type('afghan park lahore').should('have.value','afghan park lahore')
     cy.get('input[id="customer.address.city"]').type('Lahore').should('have.value','Lahore')
     cy.get('input[id="customer.address.state"]').type('Pakistan').should('have.value','Pakistan')
     cy.get('input[id="customer.address.zipCode"]').type('54000').should('have.value','54000')
     cy.get('input[id="customer.phoneNumber"]').type('03004457365').should('have.value','03004457365')
     cy.get('input[id="customer.ssn"]').type('654789').should('have.value','654789')
     cy.get('input[id="customer.username"]').type('ali111').should('have.value','ali111')
     cy.get('input[id="customer.password"]').type('12345').should('have.value','12345')
     cy.get('input[id="repeatedPassword"]').type('12345').should('have.value','12345')
     cy.get('input[value="Register"]').click()
})

    it('passes', () => {
      cy.contains('Accounts Overview').click()
      cy.get('.ng-scope > :nth-child(1) > .ng-binding').click()
        cy.get('#month').select('January')
      cy.get('#transactionType').select('All')
      cy.get('input[value="Go"]').click()
    })

    it.skip('view details in specific period', () => {
        cy.contains('Accounts Overview').click()
        cy.get('.ng-scope > :nth-child(1) > .ng-binding').click()
        cy.get('#month').click()

        
      })
  
    
  })