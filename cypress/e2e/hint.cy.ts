describe('hint', () => {
    it('fills each empty cell',  () => {
      cy.visit('/')
      cy.get('.game__cell.game__cell--filled').should('have.length',45)
      cy.get('.game__cell') .not('.game__cell--filled') .each($cell => {
      cy.wrap($cell) .click()
      cy.get('.status__action-hint') .click()
      })

      cy.contains('.overlay__text', 'You') .should('be.visible');
      cy.contains('.overlay__textspan1', 'solved') .should('be.visible')
      cy.contains('.overlay__textspan2', 'it!') .should('be.visible')
})
  })
