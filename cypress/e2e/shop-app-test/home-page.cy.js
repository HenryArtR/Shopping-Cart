

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
    it('Click in Login button', () => {
      cy.contains('Log in').click()
      
      cy.get('h1').should('have.text','Login')

      cy.get('[data-test="login-form"]').find('[for="username"]').should('have.text','Username')

      cy.get('[data-test="login-form"]').find('[for="password2"]').should('have.text','Password')

      cy.contains('Send').should('be.disabled')


    });
  })
  
  
})