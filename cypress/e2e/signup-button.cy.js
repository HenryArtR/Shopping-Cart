describe('When you click in the singup button', () => {

  beforeEach(() => {
      cy.visit('/home');
  });

  it('Should see the signup page', () => {
    cy.contains('Sign up').click()
        
    cy.url().should('include','/sign-up')

    cy.get('h1')
      .should('have.text','Sign up')

    cy.fixture('signup.json').then(result => {
      result.forEach(data => {
        cy.form('signup',data.find, data.text)
      })
    })

    cy.contains('Send').should('be.disabled')
  });

  it('Should can signup by fill in all the fields', () => {
    cy.fixture('signUpUser.json').then(user => {
      cy.signup(user)
    })
    cy.contains('Send').click()

    
  });
});