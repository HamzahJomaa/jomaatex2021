exports.isAuth = () =>{
    if(!req.session.isLoggedIn){
        return res.redirect("../login")
     } 
}