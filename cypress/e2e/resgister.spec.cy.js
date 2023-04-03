/// <reference types="cypress" /> 

import Register from "../POM pages/Registration"
const credentials = require('../fixtures/data.json')
const ln = new Register();
describe('Register', () => {
  
  //hooks
beforeEach( ()=>{
  cy.visit('https://parabank.parasoft.com/parabank/index.htm')
  cy.url().should('eq','https://parabank.parasoft.com/parabank/index.htm')
  .and('contain','parabank.parasoft')
  cy.contains('Register').click()
})

    it.only('Positive case', () => {
        
      //const ln = new Register();
      ln.setfirstname(credentials[0].Firstname)
      ln.setlastname(credentials[0].Lastname)
      ln.setaddress(credentials[0].Address)
      ln.setcity(credentials[0].City)
      ln.setstate(credentials[0].State)
      ln.setzipcode(credentials[0].Zipcode)
      ln.setphonenumber(credentials[0].Phonenumber)
      ln.setssn(credentials[0].SSN)
      ln.setusername(credentials[0].Username)
      ln.setpassword(credentials[0].Password)
      ln.setrepeatepassword(credentials[0].repeatepassword)
      ln.clickonregister()

    })
    

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