export class FundTransfer{

    TransferFunds(){
        cy.contains('Transfer Funds').click()
    }

    VerifyTransferurl(){
        cy.url().should('eq','https://parabank.parasoft.com/parabank/transfer.htm')
        cy.wait(500)
    }


    
    Setamount(){
        cy.get('input[id="amount"]').type(600)
    }
    
    Clicktransfer(){
        cy.get('input[value="Transfer"]').click()
    }

    Verifysuccessfulltransfer(){
        cy.get('.title').should('have.text','Transfer Complete!')
    }

    Verifyunsuccessfultransfer(){
        cy.contains('The amount cannot be empty.')
    }
    
    }
    
    export default FundTransfer;