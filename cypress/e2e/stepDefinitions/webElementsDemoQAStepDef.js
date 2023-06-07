import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import DemoQA from "../../support/pageObjects/DemoQA";

const demoQA = new DemoQA()

Given("User Launch the URL", function(){
cy.visit("https://demoqa.com/")
})
When("Clicks Elements link", function(){
demoQA.getElements().click()
})
Then("User should be to navigated elements page", function(){
cy.get(".main-header").should("have.text", "Elements")
})
When("Clicks Text Box link and enter the required details and Click Submit button", function(){
    demoQA.getTextBox().click()
demoQA.getFirstname().type("QA Tester")
demoQA.getEmail().type("qatester@gmail.com")
demoQA.getCurrentAddress().type("BDD Cucumber Test Automation Framework")
demoQA.getPermanentAddress().type("Test Automation Framework")
demoQA.getSubmitButton().click()
})
Then("User details should be registered", function(){
demoQA.getSumittedDetails().should("have.length", "4")
})