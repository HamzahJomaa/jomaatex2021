const getDb = require('../Util/Database').getDb


module.exports = class Category {

    constructor(){

    }

    static fetchAll(){
        const db = getDb();
        return db
            .collection('category')
            .find()
            .toArray()
            .then(category => {
            return category;
            })
            .catch(err => {
            console.log(err);
            });
    }

    static findById(catId){
        const db = getDb();
        return db
            .collection('category')
            .findOne({
                id:catId
            })
            .then(cat => {
                if (cat){
                    return cat;
                }
                return null
            })
            .catch(err => {
            console.log(err);
            });   
    }
}

