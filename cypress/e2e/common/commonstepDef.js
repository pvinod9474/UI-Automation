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
Then("Verifies Login to your account is visible", function(){
cy.contains("Login to your account").should("be.visible")
})
Then("Verifies that 'Logged in as username' is visible", function () {
    homePage.getLoggedInUser().should("be.visible")
})
Then("Clicks login button", function(){
    signUpLogIn.getLoginButton().click()
})
Then("Clicks Delete Account button", function () {
    cy.contains("Delete Account").click()
})
Then("Verifies that 'ACCOUNT DELETED!' is visible and clicks Continue button", function () {
    cy.contains("Account Deleted!").should('be.visible')
})