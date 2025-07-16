describe('Add to Cart', () => {
  it('product button present', () => {
    cy.visit('https://e-commerce-app-wine-one.vercel.app/dashboard');
    cy.get('[data-testid="product-button"]').should("exist");
    cy.contains("view products").click();
    cy.url().should('include', '/productlist');
    cy.get('[data-testid="cart-button"]').should('have.length.at.least', 1);
    cy.get('[data-testid="cart-button"]').should("exist");
    cy.get('[data-testid="cart-button"]').first().should('have.text', 'Add to Cart');
    cy.get('[data-testid="cart-button"]').first().click();
    cy.get('[data-testid="cart-button"]').first().should("have.text", "Added to Cart");
    cy.get('[data-testid="cart-icon"]').click(); 
    cy.url().should('include', '/signin');
    cy.get('[data-testid="email-field"]').should("exist")
    cy.get('[data-testid="password-field"]').should("exist")
    cy.contains('[data-testid="email-field"]').type("sreelakshmi@gmail.com").should("exist")
    cy.contains('[data-testid="password-field"]').type("123").should("exist")
    cy.get('[data-testid="login-button"]').should("exist")
    cy.contains("Log In").click()
    cy.url().should('include','/cartlist')

  });
});
