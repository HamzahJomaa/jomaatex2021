const User = require('../Models/User');
var bcrypt = require('bcryptjs');

exports.AddUser = (req,res,next)=>{
  res.render("admin/users/user_add")
}

exports.PostAddUser = (req,res,next)=>{
  const fullname = req.body.Inputname
  const Email = req.body.InputEmail1
  const Password = req.body.InputPassword1
  const ConfirmPassword = req.body.InputConfirmPassword1

  if (Password === ConfirmPassword){
  User.getUserbyEmail(Email)
  .then(_user => {
    if(_user) {
      return res.redirect('back')
    }else{
      return bcrypt.hash(Password,12)
      .then(hashedPassword=>{
        const new_user = new User(fullname,Email,hashedPassword)
        return new_user.save()
      })
      .then(add_user=>{
        if (add_user){
          res.redirect("/admin")
        }
      })
  }
  })
  .catch(err => {
    console.log(err);
  });
  }else{
    res.redirect('back')
  }
}


exports.Users = (req,res,next)=>{
    User.fetchAll()
    .then(_users => {
      res.render("admin/users/index",{users:_users})

    })
    .catch(err => {
      console.log(err);
    });
}


exports.Profile = (req,res,next)=>{
  if (req.params.userId == null && req.params.userId == ''){
    res.redirect('/admin')
  }else{
    User.getUser(req.params.userId)
    .then(_user => {
      if(_user !== null && _user !== '') {
        res.render("admin/users/profile",{profile:_user})
     }else{
      res.redirect('/admin')
     }
     
    })
    .catch(err => {
      console.log(err);
    });
  }
}