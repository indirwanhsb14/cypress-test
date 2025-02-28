import object from '../pom/object.js';
import data from '../fixtures/data.json';

describe("Success Login", () => {
  it("User logged in", () => {
    cy.visit('https://recruitment-staging-queenbee.paradev.io');
    object.loginButton().pause().click() //using pause because there are advertisement and cookies must be close manual, resume the the cypress after close the advertisement
    object.usernameField().clear().type(data.phoneNumber)
    object.passwordField().clear().type(data.password)
    object.enterButton().click();
    
  })
})
