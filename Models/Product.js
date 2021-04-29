const getDb = require('../Util/Database').getDb
const Category = require("./Category")
const Subcategory = require("./Subcategory")

module.exports = class Product {

    constructor(_name,_price,_subcatId,_featured,_gallery){

        this.name = _name
        this.price = _price
        this.subcat = _subcatId
        this.featured = _featured 
        this.gallert = _gallery
    }


    

    

    
        



    getProduct(){
        console.log(this)
    }
}


