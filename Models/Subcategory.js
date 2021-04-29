const getDb = require('../Util/Database').getDb


module.exports = class Subcategory {

    constructor(){

    }

    static fetchAll(){
        const db = getDb();
        return db
            .collection('subcategory')
            .find()
            .toArray()
            .then(subcategory => {
            return subcategory;
            })
            .catch(err => {
            console.log(err);
            });
    }


    static getSub(subId){
        const db = getDb();
        return db
            .collection('subcategory')
            .find({
                "category.id":subId
            })
            .toArray()
            .then(user => {
                if (user){
                    return user;
                }
                return null
            })
            .catch(err => {
            console.log(err);
            });    
    }


    static findById(subcatId){
        const db = getDb();
        return db
            .collection('subcategory')
            .findOne({
                id:subcatId
            })
            .then(subcat => {
                if (subcat){
                    return subcat;
                }
                return null
            })
            .catch(err => {
            console.log(err);
            });   
    }
}

