import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../support/pageObjects/homePage";
import SignUplogIn from "../../support/pageObjects/SignUpLogIn";
import Utility from "../../support/utility/Utility";
import ProductsPage from "../../support/pageObjects/ProductsPage";

const homePage = new HomePage()
const signUpLogIn = new SignUplogIn()
const utility = new Utility() 
const productsPage = new ProductsPage()


Then("Verifies 'New User Signup!' is visible", function () {
    cy.contains("New User Signup!").should("be.visible")
})
When("Enters name and email address", function () { 
    signUpLogIn.getSignUpEmail().type(utility.getRandomEmail()) //utility.getRandomEmail()
    signUpLogIn.getSignUpName().type(this.data.signUp.name)
})
Then("Clicks Signup button", function () {
    signUpLogIn.getSignUpButton().click()
})
Then("Verifies that 'ENTER ACCOUNT INFORMATION' is visible", function () {
    cy.contains('Enter Account Information').should('be.visible')
})
When("User Fill details like Title Name Email Password Date of birth", function () {
    signUpLogIn.getMr().click()
    signUpLogIn.getSignInPassword().type(this.data.signUp.password) //this.data.signUp.password
    signUpLogIn.getBOBDays().select(this.data.signUp.dobDay)
    signUpLogIn.getBOBMonths().select(this.data.signUp.dobMonth)
    signUpLogIn.getBOBYear().select(this.data.signUp.dobYear)
})
When("Selects checkbox Sign up for our newsletter and Receive special offers from our partners", function () {
    signUpLogIn.getNewsLetter().click()
    signUpLogIn.getSplOffer().click()
})
Then("User Fill details like First name Last name Company Address Address2 Country State City Zipcode Mobile Number", function () {
    signUpLogIn.getFirstName().type(this.data.signUp.firstName)
    signUpLogIn.getLastName().type(this.data.signUp.lastName)
    signUpLogIn.getCompany().type(this.data.signUp.company)
    signUpLogIn.getAddress1().type(this.data.signUp.address)
    signUpLogIn.getAddress2().type(this.data.signUp.address2)
    signUpLogIn.getCountry().select(this.data.signUp.country)
    signUpLogIn.getState().type(this.data.signUp.state) 
    signUpLogIn.getCity().type(this.data.signUp.city)
    signUpLogIn.getZipCode().type(this.data.signUp.zipCode)
    signUpLogIn.getMobileNumber().type(this.data.signUp.mobileNumber)
})
When("Clicks Create Account button", function () {
    signUpLogIn.getCreateaccount().click()
})
Then("Verifies that 'ACCOUNT CREATED!' is visible", function () {
    cy.contains('Account Created!').should('be.visible')
})
When("Clicks Continue button", function () {
    signUpLogIn.getContinueButton().click()
})

/////////////////////////////////////////////////////////////////////////////////////
When("Enters correct email address Then password", function(){
    signUpLogIn.getLoginEmail().type(this.data.login.email)
    signUpLogIn.getLoginPassword().type(this.data.login.password)
    })

///////////////////////////////////////////////////////////////////////////////////
When("Enters incorrect email address and password", function(){
    signUpLogIn.getLoginEmail().type(this.data.inValidLogin.email)
    signUpLogIn.getLoginPassword().type(this.data.inValidLogin.password)
    })    
Then("Verify error 'Your email or password is incorrect!' is visible", function(){
       cy.contains("Your email or password is incorrect!").should("be.visible")
})    
//////////////////////////////////////////////////////////////////////////////////////
When("Clicks Logout button", function(){
    cy.contains("Logout").click()
})
Then("Verify that user is navigated to login page", function(){

})
///////////////////////////////////////////////////////////////////////////////////////
Then("Verify user is navigated to ALL PRODUCTS page successfully and products list is visible", function(){
    cy.contains("All Products").should("be.visible")
    productsPage.getProductList().should("be.visible")
    
})
When("Clicks on View Product of first product", function(){
    productsPage.getProducts().contains("a[href*='product']").click()
})
Then("User is landed to product detail page", function(){
    
})
Then("Verify that detail detail is visible: product name, category, price, availability, condition, brand", function(){})