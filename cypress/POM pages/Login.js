export class Login{

    logout(){
        cy.contains('Log Out').click()

    }

    Setloginusername(username1){
        cy.get('input[name="username"]').type(username1)
    }

    Setloginpassword(password1){
        cy.get('input[name="password"]').type(password1)

    }

    Clicklogin(){
        cy.get('input[value="Log In"]').click()
    }

    Verifyredirection(){
        cy.get('.title').should('have.text','Accounts Overview')

    }

    Verifyloginurl(){
        cy.url().should('eq','https://parabank.parasoft.com/parabank/overview.htm')
    }

    Verifyinvalidcredentials(){
        cy.get('.title').should('have.text','Error!')
        cy.contains('username and password could not be verified.')
    }



    
     
    }
    
    export default Login;