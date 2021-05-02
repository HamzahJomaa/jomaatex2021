const User = require("../Models/User")
var bcrypt = require('bcryptjs');

exports.Index = (req,res,next)=>{
    res.render("admin/login")
}



exports.PostLogin = (req,res,next)=>{
    const username = req.body.username
    User
    .getUserbyUsername(username)
    .then(user=>{
        if (!user){
            return res.redirect('back')
        }
        bcrypt
        .compare(req.body.password,user.password)
        .then(result=>{
            if (result){
                req.session.isLoggedIn = true
                req.session.user = user
                return req.session.save(err=>{
                    console.log(err)
                    res.redirect("/admin")
                })
            }else{
                res.redirect('back')
            }
        })
        .catch(err=>{
            console.log(err)
            res.redirect('back')

        })
    }).catch(err=>{
        console.log(err)
        res.redirect('back')
    })

}
