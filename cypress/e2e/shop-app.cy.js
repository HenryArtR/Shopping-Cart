

describe('Shop app', () => {
  
  beforeEach(() => {
    cy.visit('/home');
  });

  it('Logo image', () => {
    cy.get('p-image').should('be.visible');
    cy.contains('/Compra facil y sencilla');
  });

  it('Should see a navbar', () => {
    const botones = ['Log in', 'Sign up', 'Inicio', 'Categorias', 'Cart']

    botones.forEach(btn => {
      cy.contains(btn);
    })    

  })

  it('Should be in the home page', () => {
      cy.contains('Productos en el catalogo')
  });



  
  
})