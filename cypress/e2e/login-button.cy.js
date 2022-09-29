describe('When you click in login button', () => {


  
  it('must see login page', () => {
    cy.visit('/home');
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

  
  it('You have an error message if you are not loged', () => {
    
    cy.login('Pinocho', 'wtfname1')
    
    cy.get('[data-test="error-login-send"]').should('have.text','Usuario o contraseña incorrecto')
    
  });
  

  it('You can login with an user acount', () => {
    cy.fixture('loginuser.json').then(user => {
      const {name, contrasena} = user
      cy.login(name, contrasena)
    })

    cy.url()
      .should('include', '/home')

    cy.contains('Log out')
    cy.get('p-menubar').find('h3').should('have.text', 'Bienvenido, Robert Downey')
  });

  it('If you logout your name disapear', () => {  
    cy.login('Ironman', 'aaaaaaA1')
    cy.contains('Log out').click()
    cy.get('h3:first').should('be.hidden')
  });
});