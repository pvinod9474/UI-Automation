export default class DemoQA{
    constructor(){
        this.elements = ".card.mt-4.top-card:nth-child(1)",
        this.forms = ".card.mt-4.top-card:nth-child(2)",
        this.alertsFrameWindows = ".card.mt-4.top-card:nth-child(3)",
        this.textBox = "#item-0",
        this.firstName = "#userName",
        this.email = "#userEmail",
        this.currentAddress = "#currentAddress",
        this.permantAddress = "#permanentAddress"
        this.submitButton = "#submit",
        this.sumittedDetails = ".mb-1"


    }
    getElements(){
        return cy.get(this.elements)
    }
    getTextBox(){
        return cy.get(this.textBox)
    }
    getFirstname(){
        return cy.get(this.firstName)
    }
    getEmail(){
        return cy.get(this.email)
    }
    getCurrentAddress(){
        return cy.get(this.currentAddress)
    }
    getPermanentAddress(){
        return cy.get(this.permantAddress)
    }
    getSubmitButton(){
        return cy.get(this.submitButton)
    }
    getSumittedDetails(){
        return cy.get(this.sumittedDetails)
    }
}