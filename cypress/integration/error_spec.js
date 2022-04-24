describe('sensi error page flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.goprogram.ai/inspiration', { fixture: 'sampleData.json' })
    cy.visit('http://localhost:3000/error')
  })

  it('should display message for the user on load', () => {
    cy.contains('Hmm.. try going back to the homepage - click sensi.')
  })
})