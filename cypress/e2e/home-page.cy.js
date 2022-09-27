

describe('Shop app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/home');
  });

  it('Logo image', () => {
    cy.get('p-image').should('be.visible');
    cy.contains('/Compra facil y sencilla');
  });

  context('Navbar', () => {
    it('Navbar content', () => {
      const botones = ['Log in', 'Sign up', 'Inicio', 'Categorias', 'Cart']
      botones.forEach(btn => {
        cy.contains(btn);
      })    
    });
    it('Click in Log in button', () => {
      cy.contains('Log in')
        .click()

      cy.url().should('include','/login')

      cy.get('h1')
        .should('have.text','Login')

      cy.form('login','username', 'Username')
      cy.form('login', 'password2', 'Password')

      cy.contains('Send')
        .should('be.disabled')

    });

    it('Click in Sign Up button', () => {
      cy.contains('Sign up').click()
      
      cy.url().should('include','/sign-up')

      cy.get('h1')
        .should('have.text','Sign up')

      cy.fixture('signup.json').then(result => {
        result.forEach(data => {
          cy.form('signup', data.find, data.text)
        })
      })

      cy.contains('Send').should('be.disabled')

    });
  })

  
  
})