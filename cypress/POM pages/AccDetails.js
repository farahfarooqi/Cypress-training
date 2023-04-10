export class AccDetails{

ViewDetails(){
    cy.contains('Accounts Overview').click()
      cy.get('.ng-scope > :nth-child(1) > .ng-binding').click()
}

Verifydetails(){
    cy.get('[ng-if="showDetails"] > .title').should('have.text','Account Details')
}

SetMonth(){
    cy.get('#month').select('January')

}

SetType(){
    cy.get('#transactionType').select('All')

}
ClickGo(){
    cy.get('input[value="Go"]').click()
}
VerifyDetailsPeriod(){
    cy.contains('No transactions found')
}

}

export default AccDetails;