/// <reference types="cypress" /> 

import FundTransfer from "../POM pages/FundTransfer"
import Register from "../POM pages/Registration"
const credentials = require('../fixtures/data.json')
const ln = new Register();
const fund= new FundTransfer();

describe('Transfer Funds', () => {

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
     let username = '';
      const characters = 'abcdefghijklmnopqrstuvwxyz';
      for (let i = 0; i < 8; i++) {
        username += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      ln.setusername(username)
      ln.setpassword(credentials[0].Password)
      ln.setrepeatepassword(credentials[0].repeatepassword)
      ln.clickonregister()
})

    it('Transfer funds', () => {
      fund.TransferFunds()
      fund.VerifyTransferurl()
      fund.Setamount()
      fund.Clicktransfer()
      fund.Verifysuccessfulltransfer()
      
    })

    it('leave amount field empty', () =>{
      fund.TransferFunds()
      fund.VerifyTransferurl()
      fund.Clicktransfer()
      fund.Verifyunsuccessfultransfer()
    })

    
  })