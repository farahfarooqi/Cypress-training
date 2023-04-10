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

    it('Positive case', () => {
        
      //const ln = new Register();
      ln.setfirstname(credentials[0].Firstname)
      ln.setlastname(credentials[0].Lastname)
      ln.setaddress(credentials[0].Address)
      ln.setcity(credentials[0].City)
      ln.setstate(credentials[0].State)
      ln.setzipcode(credentials[0].Zipcode)
      ln.setphonenumber(credentials[0].Phonenumber)
      ln.setssn(credentials[0].SSN)
     
      // generate unique usernames
     let username = '';
      const characters = 'abcdefghijklmnopqrstuvwxyz';
      for (let i = 0; i < 8; i++) {
        username += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      ln.setusername(username)
      ln.setpassword(credentials[0].Password)
      ln.setrepeatepassword(credentials[0].repeatepassword)
      ln.clickonregister()
      ln.Verifyregistration()

    })
    

    it('negetive case with fixtures and poms' , () => {

      ln.setfirstname(credentials[1].Firstname)
      ln.setlastname(credentials[1].Lastname)
      ln.setaddress(credentials[1].Address)
      ln.notsetcity(credentials[1].City)
      ln.setstate(credentials[1].State)
      ln.setzipcode(credentials[1].Zipcode)
      ln.setphonenumber(credentials[1].Phonenumber)
      ln.setssn(credentials[1].SSN)
     
      // generate unique usernames
     let username = '';
      const characters = 'abcdefghijklmnopqrstuvwxyz';
      for (let i = 0; i < 8; i++) {
        username += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      ln.setusername(username)
      ln.setpassword(credentials[1].Password)
      ln.setrepeatepassword(credentials[1].repeatepassword)
      ln.clickonregister()
      ln.Verifynotregister()


    })

  })