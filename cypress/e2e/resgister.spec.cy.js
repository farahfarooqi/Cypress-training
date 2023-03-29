/// <reference types="cypress" /> 
const credentials = require('../fixtures/data.json')

describe('Register', () => {
  
  //hooks
beforeEach( ()=>{
  cy.visit('https://parabank.parasoft.com/parabank/index.htm')
  cy.url().should('eq','https://parabank.parasoft.com/parabank/index.htm')
  .and('contain','parabank.parasoft')
  cy.contains('Register').click()
})

    it('positive case', () => {
    
     cy.get('input[id="customer.firstName"]').type(credentials[0].Firstname).should('have.value',credentials[0].Firstname)
     cy.get('input[id="customer.lastName"]').type(credentials[0].Lastname).should(credentials[0].Lastname)
     cy.get('input[id="customer.address.street"]').type(credentials[0].Address).should('have.value',credentials[0].Address)
     cy.get('input[id="customer.address.city"]').type(credentials[0].City).should('have.value',credentials[0].City)
     cy.get('input[id="customer.address.state"]').type(credentials[0].State).should('have.value',credentials[0].State)
     cy.get('input[id="customer.address.zipCode"]').type(credentials[0].Zipcode).should('have.value',credentials[0].Zipcode)
     cy.get('input[id="customer.phoneNumber"]').type(credentials[0].Phonenumber).should('have.value',credentials[0].Phonenumber)
     cy.get('input[id="customer.ssn"]').type(credentials[0].SSN).should('have.value',credentials[0].SSN)
     cy.get('input[id="customer.username"]').type(credentials[0].Username).should('have.value',credentials[0].Username)
     cy.get('input[id="customer.password"]').type(credentials[0].Password).should('have.value',credentials[0].Password)
     cy.get('input[id="repeatedPassword"]').type(credentials[0].repeatepassword).should('have.value',credentials[0].repeatepassword)
     cy.get('input[value="Register"]').click()

    });

    it.skip('negetive case', () => {
    
     cy.get('input[id="customer.firstName"]').type('Ali')
     cy.get('input[id="customer.lastName"]')
     cy.get('input[id="customer.address.street"]').type('afghan park lahore')
     cy.get('input[id="customer.address.city"]').type('Lahore')
     cy.get('input[id="customer.address.state"]').type('Pakistan')
     cy.get('input[id="customer.address.zipCode"]').type('54000')
     cy.get('input[id="customer.phoneNumber"]').type('03004457365')
     cy.get('input[id="customer.ssn"]').type('654789')
     cy.get('input[id="customer.username"]').type(' dsad')
     cy.get('input[id="customer.password"]').type('12345')
     cy.get('input[id="repeatedPassword"]').type('12345')
     cy.get('input[value="Register"]').click()

    })
  })