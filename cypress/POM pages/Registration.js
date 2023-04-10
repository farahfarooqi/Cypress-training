export class Register{

    setfirstname(firstname){
        cy.get('input[id="customer.firstName"]').type(firstname)

    }

    setlastname(lastname){
        cy.get('input[id="customer.lastName"]').type(lastname)

    }

    setaddress(address){
        cy.get('input[id="customer.address.street"]').type(address)

    }

    setcity(city){
        cy.get('input[id="customer.address.city"]').type(city)
    }

    setstate(state){
        cy.get('input[id="customer.address.state"]').type(state)
    }

    setzipcode(zipcode){
        cy.get('input[id="customer.address.zipCode"]').type(zipcode)
    }

    setphonenumber(phonenumber){
        cy.get('input[id="customer.phoneNumber"]').type(phonenumber)
    }

    setssn(ssn){
        cy.get('input[id="customer.ssn"]').type(ssn)
    }

    setusername(username){
        cy.get('input[id="customer.username"]').type(username)


    }

    setpassword(password){
        cy.get('input[id="customer.password"]').type(password)
    }

    setrepeatepassword(repeatepass){
        cy.get('input[id="repeatedPassword"]').type(repeatepass)
    }

    clickonregister(){
        cy.get('input[value="Register"]').click()
    }

    Verifyregistration(){
        cy.get('.title').should('contain.text', 'Welcome')
    }

    Verifynotregister()
    {
        cy.get('.title').should('contain.text', 'Signing up')
    }

    notsetcity(city){
        cy.get('input[id="customer.address.city"]')
    }

}

export default Register;
