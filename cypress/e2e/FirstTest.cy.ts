describe('Add to Cart', () => {
  it('product button present', () => {
    cy.visit('https://e-commerce-app-wine-one.vercel.app/dashboard');
    cy.get('[data-testid="product-button"]').should("exist");
    cy.contains("view products").click();
    cy.url().should('include', '/productlist');
    cy.get('[data-testid="cart-button"]').should('have.length.at.least', 1);
    cy.get('[data-testid="cart-button"]').should("exist");
    cy.get('[data-testid="product-title"]')
      .first()
      .invoke("text")
      .then((text) => {
        const productTitle = text.trim();
        cy.get('[data-testid="cart-button"]').first().should('have.text', 'Add to Cart');
        cy.get('[data-testid="cart-button"]').first().click();
        cy.get('[data-testid="cart-button"]').first().should("have.text", "Added to Cart");
        cy.get('[data-testid="cart-icon"]').click(); 
        cy.url().should('include', '/signin');
        cy.get('[data-testid="email-field"]').should("exist").type("sreelakshmi@gmail.com");
        cy.get('[data-testid="password-field"]').should("exist").type("123");
        cy.get('[data-testid="login-button"]').should("exist");
        cy.contains("Log In").click();
        cy.url().should('include', '/cartlist');
        cy.contains(productTitle).should("exist");
        cy.get('[data-testid="checkout-button"]').should("exist")
        cy.contains("Checkout").click();
        cy.url().should('include','/checkout')
        cy.get('[data-testid="checkout-name"]', { timeout: 10000 }).type("sreelakshmi");
        cy.get('[data-testid="checkout-address"]').type("viyyath house")
        cy.get('[data-testid="checkout-city"]').type("thrissur")
        cy.get('[data-testid="checkout-phone"]').type("8606660873")
        cy.get('[data-testid="checkout-email"]').type("sreelakshmi@gmail.com")
        cy.get('[data-testid="checkout-stripe"]').should("exist")
        
      });
    
    cy.intercept('POST', '/api/create-checkout-session', {
          statusCode: 200,
          body:{url:'https://checkout.stripe.com/test-session-id'}
    }).as('stripeSession')
    cy.window().then((win) => {
      cy.stub(win.location,'href').as('redirect')
    })
    cy.get('[data-testid="checkout-stripe"]').click();
    cy.wait('@stripeSession')
    cy.get('@redirect').should('eq', 'https://checkout.stripe.com/test-session-id')
  });
});
