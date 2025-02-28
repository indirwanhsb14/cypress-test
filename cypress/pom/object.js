export default class object {
    static usernameField() {
      return cy.get('#page-login__tabs-number__input-number');
    }

    static passwordField() {
        return cy.get('#page-login__tabs-email__input-password');
    }

    static enterButton() {
        return cy.get('#page-login__button-login');
    }
}