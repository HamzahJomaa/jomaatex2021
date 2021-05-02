const getDb = require('../Util/Database').getDb


class User {

constructor(fullname,_username, email, password){
    this.name = fullname
    this.username = _username
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

static getUserbyUsername(_username){
    const db = getDb();
    return db
        .collection('users')
        .findOne({
            username:_username
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