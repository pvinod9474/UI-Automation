class HomePage {
    constructor(){
        this.home = ".navbar-nav li:nth-child(1)",
        this.products = ".navbar-nav li:nth-child(2)",
        this.cart = ".navbar-nav li:nth-child(3)",
        this.signUplogIn = ".navbar-nav li:nth-child(4)",
        this.testCases = ".navbar-nav li:nth-child(5)",
        this.apiTesting = ".navbar-nav li:nth-child(6)",
        this.vedioTutorials = ".navbar-nav li:nth-child(7)",
        this.contactUs = ".navbar-nav li:nth-child(8)"
        this.loggedInUser = ".navbar-nav li:nth-child(10)"

        
        

    }
    getHome(){
        return cy.get(this.home)
    }
    getProducts(){
        return cy.get(this.products)
    }
    getCart(){
        return cy.get(this.cart)
    }
    getsignUpLogIn(){
        return cy.get(this.signUplogIn)
    }
    getTestCases(){
        return cy.get(this.testCases)
    }
    getAPITesting(){
        return cy.get(this.apiTesting)
    }
    getVedioTutorials(){
        return cy.get(this.vedioTutorials)
    }
    getContactUs(){
        return cy.get(this.contactUs)
    }
    getLoggedInUser(){
        return cy.get(this.loggedInUser)
    }
}export default HomePage