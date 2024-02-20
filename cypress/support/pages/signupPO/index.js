export class SignupLoginPage {
  clickSignupLoginButton() {
    cy.get('a:contains(" Signup / Login")').click();
  }

  verifyNewUserSignupVisible() {
    cy.contains("New User Signup!").should("be.visible");
  }

  enterNameAndEmail(name, email) {
    cy.get('[data-qa="signup-name"').type(name);
    cy.get('[data-qa="signup-email"').type(email);
  }

  clickSignupButton() {
    cy.get('[data-qa="signup-button"]').click();
  }

  verifyEnterAccountInformationVisible() {
    cy.get('h2').contains('Enter Account Information').should("be.visible");
  }
  
  fillAccountInformation(accountInfo) {
    cy.get(`[value="${accountInfo.title}"]`).check( { force: true } );
    cy.get('[data-qa="password"]').type(accountInfo.password);
    cy.get('[data-qa="days"]').select(accountInfo.dob[0]);
    cy.get('[data-qa="months"]').select(accountInfo.dob[1]);
    cy.get('[data-qa="years"]').select(accountInfo.dob[2]);
  }
  
  selectNewsletterAndPartnerCheckboxes() {
    cy.get('[name="newsletter"]').check();
    // cy.get('[name="partner"]').check();
  }
  
  fillPersonalInformation(addInfo) {
    cy.get('[data-qa="first_name"]').type(addInfo.firstName);
    cy.get('[data-qa="last_name"]').type(addInfo.lastName);
    cy.get('[data-qa="company"]').type(addInfo.company);
    cy.get('[data-qa="address"]').type(addInfo.address1);
    cy.get('[data-qa="address2"]').type(addInfo.address2);
    cy.get('[data-qa="country"]').select(addInfo.country);
    cy.get('[data-qa="state"]').type(addInfo.state);
    cy.get('[data-qa="city"]').type(addInfo.city);
    cy.get('[data-qa="zipcode"]').type(addInfo.zip);
    cy.get('[data-qa="mobile_number"]').type(addInfo.mobile);
  }
  
  clickCreateAccountButton() {
    cy.get('[data-qa="create-account"]').click();
  }
  
  verifyAccountCreatedVisible() {
    cy.get("h2:contains('Account Created!')").should("be.visible");
  }
  
  clickContinueButton() {
    cy.get('[data-qa="continue-button"]').click();
  }
  
  verifyLoggedInAsVisible(username) {
    cy.get(`a:contains(" Logged in as ${username}")`).should("be.visible");
  }
  
  clickDeleteAccountButton() {
    cy.get("a:contains(' Delete Account')").click();
  }
  
  verifyAccountDeletedVisible() {
    cy.get("h2:contains('Account Deleted!')").should("be.visible");
  }
  
}
