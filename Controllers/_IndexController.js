exports.Index = (req,res,next)=>{
    if(req.session.isLoggedIn == null){
        res.render("admin/login")
    }else{
        res.render("admin/index")
    }
    

}
