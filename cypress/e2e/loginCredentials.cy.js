describe("Success Login", () => {
  it("User logged in", () => {
    cy.visit('https://recruitment-staging-queenbee.paradev.io/login').clear();
    cy.get('#page-login__tabs-number__input-number').clear().type('82268115697');
    cy.get('#page-login__tabs-email__input-password').clear().type('Pass123@');
    cy.get('#page-login__button-login').click();
  })
})