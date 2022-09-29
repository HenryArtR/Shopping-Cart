/// <reference types="cypress" />

Cypress.Commands.add('form', (type, find, text) => { 
  cy.get(`[data-test="${type}-form"]`)
    .find(`[for=${find}]`)
    .should('have.text',`${text}`)
})

Cypress.Commands.add('login', (name, contrasena) => {
  
  cy.visit('/login')
  
  cy.get(`[data-test="login-form"]`)
    .find('[for=username]')
    .type(`${name}`)
  cy.get(`[data-test="login-form"]`)
    .find('[for=password2]')
    .type(`${contrasena}{enter}`)
  
})

Cypress.Commands.add('signup', (user) => {
  
  cy.visit('/sign-up')

  
  for (const x in user) {
    cy.get(`[data-test="signup-form"]`)
    .find(`[for=${x}]`)
    .type(`${user[x]}`)
  }
  
})