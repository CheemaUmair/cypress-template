export class HomePage {
  visit() {
    cy.visit("http://automationexercise.com");
  }

  verifyHomePageVisible() {
    cy.get('h2:contains("Category")').should("be.visible");
  }
}
