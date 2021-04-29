const getDb = require('../Util/Database').getDb


class User {

constructor(fullname, email, password){
    this.name = fullname
    this.email = email
    this.password  = password
}

save(){
    const db = getDb();
    return db
        .collection('users')
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

static getUserbyEmail(_email){
    const db = getDb();
    return db
        .collection('users')
        .findOne({
            email:_email
        })
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

static SignIn(email) {

    return(email)
    
}

static getUser(userId){
    const db = getDb();
    return db
        .collection('users')
        .findOne({
            id:userId
        })
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

static fetchAll() {
    const db = getDb();
    return db
        .collection('users')
        .find()
        .toArray()
        .then(user => {
        return user;
        })
        .catch(err => {
        console.log(err);
        });
    }
}


module.exports = User