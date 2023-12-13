Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
 cy.get('#firstName').type('Andrea')
 cy.get('#lastName').type('Silva Santos Carvalho')
 cy.get('#email').type('deass0101@gmailcom')
 cy.get('#open-text-area').type('teste')
 cy.contains('.button', 'Enviar').click()
})
