export class LoanRequest{

    RequestLoan(){
        cy.contains('Request Loan').click()
    }

    Setloanamount(){
        cy.get('#amount').type(500)
    }

    Setdownpayment(){
        cy.get('#downPayment').type(200)
    }

    Clickapplyloan(){
        cy.get('input[value="Apply Now"]').click()
    }

    Verifyloanapplysuccessfully(){
        cy.get('.title').should('have.text','Loan Request Processed')
    }

    Verifyloanapproval(){
        cy.contains('loan has been approved')
    }

    Verifyloannotapplied(){
        cy.get('.title').should('have.text','Error!')

    }
     
    }
    
    export default LoanRequest;