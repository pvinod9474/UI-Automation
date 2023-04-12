class SignUplogIn {
    constructor() {
            this.signUpName = '[data-qa="signup-name"]',
            this.signUpEmail = '[data-qa="signup-email"]',
            this.signUpButton = '[data-qa="signup-button"]',
            this.loginName = '[data-qa="login-name"]',
            this.loginEmail = '[data-qa="login-email"]',
            this.loginPassword = "[data-qa='login-password']"
            this.loginButton = '[data-qa="login-button"]'
            this.subscriptionEmail = '#susbscribe_email',
            this.subscription = '#subscribe'
            this.mr = "#id_gender1"
            this.mrs = "#id_gender2"
            this.signInPassword = '[data-qa="password"]'
            this.dobDays = '[data-qa="days"]'
            this.dobMonth = '[data-qa="months"]'
            this.dobYear = '[data-qa="years"]' 
            this.newsLetter = "#newsletter"
            this.splOffer = '#optin'
            this.firstName = '[data-qa="first_name"]' 
            this.lastName = '[data-qa="last_name"]'
            this.company = '[data-qa="company"]'
            this.address1 = '[data-qa="address"]'
            this.address2 = '[data-qa="address2"]'
            this.country = '[data-qa="country"]'
            this.state = '[data-qa="state"]'
            this.city = '[data-qa="city"]'
            this.zipCode = '[data-qa="zipcode"]'
            this.mobileNumber = '[data-qa="mobile_number"]'
            this.createAccount = '[data-qa="create-account"]'
            this.coutinueButton = '[data-qa="continue-button"]'



    }
    getSignUpName() {
        return cy.get(this.signUpName)
    }
    getSignUpEmail() {
        return cy.get(this.signUpEmail)
    }
    getSignUpButton() {
        return cy.get(this.signUpButton)
    }
    getLoginName() {
        return cy.get(this.loginName)
    }
    getLoginEmail() {
        return cy.get(this.loginEmail)
    }
    getLoginPassword(){
        return cy.get(this.loginPassword)
    }
    getLoginButton() {
        return cy.get(this.loginButton)
    }
    getSubscriptionEmail(){
        return cy.get(this.subscriptionEmail)
    }
    getSubscription(){
        return cy.get(this.subscription)
    }
    getMr(){
        return cy.get(this.mr)
    } 
    getMrs(){
        return cy.get(this.mrs)
    } 
    getSignInPassword(){
        return cy.get(this.signInPassword)
    } 
    getBOBDays(){
        return cy.get(this.dobDays)
    } 
    getBOBMonths(){
        return cy.get(this.dobMonth )
    } 
    getBOBYear(){
        return cy.get(this.dobYear)
    } 
    getNewsLetter(){
        return cy.get( this.newsLetter)
    } 
    getSplOffer(){
        return cy.get(this.splOffer)
    } 
    getFirstName(){
        return cy.get(this.firstName)
    } 
    getLastName(){
        return cy.get(this.lastName)
    } 
    getCompany(){
        return cy.get(this.company)
    } 
    getAddress1(){
        return cy.get(this.address1)
    } 
    getAddress2(){
        return cy.get(this.address2)
    } 
    getCountry(){
        return cy.get(this.country)
    } 
    getState(){
        return cy.get(this.state)
    } 
    getCity(){
        return cy.get(this.city)
    } 
    getZipCode(){
        return cy.get(this.zipCode)
    } 
    getMobileNumber(){
        return cy.get(this.mobileNumber)
    } 
    getCreateaccount(){
        return cy.get(this.createAccount)
    } 
    getContinueButton(){
        return cy.get(this.coutinueButton)
    }
  


}export default SignUplogIn