import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../support/pageObjects/homePage";
import SignUplogIn from "../../support/pageObjects/SignUpLogIn";

const homePage = new HomePage()
const signUpLogIn = new SignUplogIn()

Given("User Launch URL", function(){
    cy.visit("/")
})
Then("Verifies that home page is visible successfully", function(){
    cy.get('[alt="Website for automation practice"]').should('be.visible')
})
When("Clicks on SignupORLogin button", function(){
    homePage.getsignUpLogIn().click()
})
Then("Verifies 'New User Signup!' is visible", function(){
   cy.contains("New User Signup!").should("be.visible")  
}) 
When("Enters name and email address", function(){
   signUpLogIn.getSignUpEmail().type("Testing4325126@gmail.com")
  signUpLogIn.getSignUpName().type("Testing26")
})
Then("Clicks Signup button", function(){
    signUpLogIn.getSignUpButton().click()
})
Then("Verifies that 'ENTER ACCOUNT INFORMATION' is visible", function(){
    cy.contains('Enter Account Information').should('be.visible')
})
When("User Fill details like Title Name Email Password Date of birth", function(){
    signUpLogIn.getMr().click()
    signUpLogIn.getSignInPassword().type("123456789")
    signUpLogIn.getBOBDays().select('5')
    signUpLogIn.getBOBMonths().select('April')
    signUpLogIn.getBOBYear().select('2020')
})
When("Selects checkbox Sign up for our newsletter and Receive special offers from our partners", function(){
    signUpLogIn.getNewsLetter().click()
    signUpLogIn.getSplOffer().click()
}) 
Then("User Fill details like First name Last name Company Address Address2 Country State City Zipcode Mobile Number", function(){
    signUpLogIn.getFirstName().type("Cypress Testing")
    signUpLogIn.getLastName().type("BDD")
    signUpLogIn.getCompany("Testing Team")
    signUpLogIn.getAddress1().type("QA Testing")
    signUpLogIn.getAddress2().type("QA Test")
    signUpLogIn.getCountry().select('India')
    signUpLogIn.getState().type("TG")
    signUpLogIn.getCity().type("Hyd")
    signUpLogIn.getZipCode().type("123456")
    signUpLogIn.getMobileNumber().type("1234567890")
})
When("Clicks Create Account button", function(){
    signUpLogIn.getCreateaccount().click()
})
Then("Verifies that 'ACCOUNT CREATED!' is visible", function(){
    cy.contains('Account Created!').should('be.visible')
})
When("Clicks Continue button", function(){
    signUpLogIn.getContinueButton().click()
})
Then("Verifies that 'Logged in as username' is visible", function(){
    homePage.getLoggedInUser().should("be.visible")
})
When("Clicks Delete Account button", function(){
    cy.contains("Delete Account").click()
})
Then("Verifies that 'ACCOUNT DELETED!' is visible and clicks Continue button", function(){
    cy.contains("Account Deleted!").should('be.visible')
})