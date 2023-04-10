describe('Registration', () => {
    it('Registers a new user', () => {
      // Visit the registration page
      cy.visit('/register');
  
      // Generate a random username using a loop
      let username = '';
      const characters = 'abcdefghijklmnopqrstuvwxyz';
      for (let i = 0; i < 8; i++) {
        username += characters.charAt(Math.floor(Math.random() * characters.length));
      }
  
      // Fill in the registration form with the generated username
      cy.get('#username').type(username);
      cy.get('#email').type('example@example.com');
      cy.get('#password').type('password');
      cy.get('#submit').click();
  
      // Assert that the registration was successful
      cy.contains('Registration successful');
    });
  });
  