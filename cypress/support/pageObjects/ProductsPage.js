class ProductsPage{
    constructor(){
        this.productList = ".features_items",
        this.products = ".single-products",
        this.viewProduct = "a[href*='product']",
        this.productName = ".product-information h2",
        this.productPrice = ".product-information [css='2']",
        this.productDetails = ".product-information p"
 }
    getProductList(){
        return cy.get(this.productList)
    }
    getProducts(){
        return cy.get(this.products)
    }
    getViewProduct(){
        return cy.get(this.viewProduct)
    }
    getProductName(){
        return cy.get(this.productName)
    }
    getProductPrice(){
        return cy.get(this.productPrice)
    }
    getProductDetails(){
        return cy.get(this.productDetails)
    }

} export default ProductsPage