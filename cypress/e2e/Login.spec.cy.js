/// <reference types="cypress" /> 

import Login from "../POM pages/Login"
import Register from "../POM pages/Registration"
const credentials = require('../fixtures/data.json')
const ln = new Register();
const log = new Login();
let username = '';

describe('Login', () => {

  beforeEach(()=>{
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.url().should('eq','https://parabank.parasoft.com/parabank/index.htm')
    .and('contain','parabank.parasoft')
     cy.contains('Register').click()
     ln.setfirstname(credentials[0].Firstname)
      ln.setlastname(credentials[0].Lastname)
      ln.setaddress(credentials[0].Address)
      ln.setcity(credentials[0].City)
      ln.setstate(credentials[0].State)
      ln.setzipcode(credentials[0].Zipcode)
      ln.setphonenumber(credentials[0].Phonenumber)
      ln.setssn(credentials[0].SSN)
      // generate unique usernames
      const characters = 'abcdefghijklmnopqrstuvwxyz';
      for (let i = 0; i < 8; i++) {
        username += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      ln.setusername(username)
      ln.setpassword(credentials[0].Password)
      ln.setrepeatepassword(credentials[0].repeatepassword)
      ln.clickonregister()
})


    it('login with valid credentials', () => {

      log.logout()
      log.Setloginusername(username)
      log.Setloginpassword(credentials[2].password)
      log.Clicklogin()
      log.Verifyloginurl()
      
      
    })

    it('invalid credentials', () => {
      log.logout()
      log.Setloginusername(username)
      log.Setloginpassword(credentials[3].password)
      log.Clicklogin()
      log.Verifyinvalidcredentials()
      
    })

    it.only('redirected to the account services', () => {
      log.logout()
      log.Setloginusername(username)
      log.Setloginpassword(credentials[2].password)
      log.Clicklogin()
      log.Verifyloginurl()
      log.Verifyredirection()
      
    })

    it('log out and login', () => {
      log.logout()
      log.Setloginusername(username)
      log.Setloginpassword(credentials[2].password)
      log.Clicklogin()
      log.logout()
      log.Setloginusername(username)
      log.Setloginpassword(credentials[2].password)
      log.Clicklogin()
      log.Verifyloginurl()
      log.Verifyredirection()

      
    })
  })