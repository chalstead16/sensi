describe('previous entries', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.goprogram.ai/inspiration', { fixture: 'sampleData.json' })
    cy.visit('http://localhost:3000')
    cy.get('.neutral').click()
    cy.get('.diary-entry').type('this is how i am feeling  1')
    cy.get('.submit-button').click()
    cy.get('.happy').click()
    cy.get('.diary-entry').type('this is how i am feeling  2')
    cy.get('.submit-button').click()
    cy.get('.entries-button').click()
  })

  it('should header and entry cards', () => {
    cy.get('.card').contains('You must do the thing you think you cannot do')
    cy.get('.card').contains('Eleanor Roosevelt')
    cy.get('.card').contains('emotion: neutral')
    cy.get('.card').contains('this is how i am feeling 1')
    cy.get('.like-button').contains('🤍')
  })

  it('should be able to like cards individually', () => {
    cy.get('.like-button').first().click()
  })

  it('should be able to unlike cards individually', () => {
    cy.get('.like-button').first().click()
    cy.get('.like-button').first().click()
  })
})