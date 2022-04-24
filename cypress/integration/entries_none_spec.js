describe('sensi homepage flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.goprogram.ai/inspiration', { fixture: 'sampleData.json' })
    cy.visit('http://localhost:3000/entries')
  })

  it('should display message for the user on load with no entires', () => {
    cy.contains('no previous entries')
  })
})