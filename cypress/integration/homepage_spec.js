describe('sensi homepage flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.goprogram.ai/inspiration', { fixture: 'sampleData.json' })
    cy.visit('http://localhost:3000')
  })

  it('should be able to visit the page and render the header component, feelings form with inspirational quote, todo list, and add task component', () => {
    cy.contains('sensi')
      .get('.entries-button').contains('entries')
      .get('h2').contains('You must do the thing you think you cannot do')
      .get('h3').contains('Eleanor Roosevelt')
      .get('h3').contains('i\'m currently feeling...')
      .get('.excited').should('be.visible')
      .get('.happy').should('be.visible')
      .get('.neutral').should('be.visible')
      .get('.upset').should('be.visible')
      .get('.tired').should('be.visible')
      .get('h3').contains('my thoughts...')
      .get('.submit-button').contains('submit')
      .get('h2').contains('todo list')
      .get('.todo-list').contains('all tasks completed')
      .get('h2').contains('add tasks')
      .get('.submit-task').contains('submit')
  })

  it('should be able to click on an emotion', () => {
    cy.get('.excited').click()
      .get('.happy').click()
      .get('.neutral').click()
      .get('.upset').click()
      .get('.tired').click()
  })

  it('should be able to type and submit thoughts', () => {
    cy.get('.diary-entry').type('this is how i am feeling')
      .get('.submit-button').click()
  })

  it('should be able to type and submit a new task', () => {
    cy.get('.add-task-input').type('this is a new task')
      .get('.submit-task').click()
  })

  it('should be able to check and delete tasks in to do list', () => {
    cy.get('.add-task-input').type('this is a new task')
      .get('.submit-task').click()
      .get('.checkbox').click()
      .get('.delete-button').click()
  })
})