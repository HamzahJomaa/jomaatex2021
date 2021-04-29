const getDb = require('../Util/Database').getDb
const Category = require("./Category")
const Subcategory = require("./Subcategory")

module.exports = class Product {

    constructor(_name,_price,_desc,_subcatId,_featured,_gallery){

        this.name = _name
        this.price = _price
        this.desc = _desc
        this.subcat = _subcatId
        this.featured = _featured 
        this.gallery = _gallery
    }

    getProduct(){
        console.log(this)
    }

    save(){
        const db = getDb();
        return db
            .collection('products')
            .insertOne(this)
            .then(user => {
                if (user){
                    return user;
                }
                
            })
            .catch(err => {
            console.log(err);
            }); 
    }
}


