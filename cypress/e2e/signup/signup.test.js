import { HomePage, SignupLoginPage } from '../../support/pages'

describe('Register User Test Case', () => {
  const homePage = new HomePage()
  const signupLoginPage = new SignupLoginPage()

  beforeEach(() => {
    cy.fixture('data').then((data) => {
      cy.wrap(data).as('testData')
    })
  })

  it('should register a new user', () => {
    homePage.visit()
    homePage.verifyHomePageVisible()

    signupLoginPage.clickSignupLoginButton()
    signupLoginPage.verifyNewUserSignupVisible()

    // Access test data from the fixture file
    cy.get('@testData').then((testData) => {
      signupLoginPage.enterNameAndEmail(testData.user.name, testData.user.email)
      signupLoginPage.clickSignupButton()

      signupLoginPage.verifyEnterAccountInformationVisible()
      signupLoginPage.fillAccountInformation(testData.user['account-information'])
      signupLoginPage.selectNewsletterAndPartnerCheckboxes()
      signupLoginPage.fillPersonalInformation(testData.user['address-information'])
      signupLoginPage.clickCreateAccountButton()

      signupLoginPage.verifyAccountCreatedVisible()
      signupLoginPage.clickContinueButton()
      
      signupLoginPage.verifyLoggedInAsVisible(testData.user.name)
      signupLoginPage.clickDeleteAccountButton()
      
      signupLoginPage.verifyAccountDeletedVisible()
      signupLoginPage.clickContinueButton()
    })
  })
})