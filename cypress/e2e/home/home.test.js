import { HomePage } from '../../support/pages'

describe('Home Page Test', () => {
    const homePage = new HomePage()
  
    it('Should visit home page', () => {
      homePage.visit()
      homePage.verifyHomePageVisible()
    })
})
  