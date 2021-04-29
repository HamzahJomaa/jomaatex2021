const Category = require('../Models/Category');
const Subcategory = require('../Models/Subcategory');
const Product = require("../Models/Product")
const getGallery = require("../Util/helper").getGallery


exports.Index = (req,res,next)=>{
    res.render("admin/products/index")
}

exports.AddProduct = (req,res,next)=>{
    Category.fetchAll()
    .then(_categroy => {
        Subcategory.fetchAll()
        .then(_subcategroy => {
            res.render("admin/products/add",{categories:_categroy,subcategories:_subcategroy})
        })
        .catch(err=>{
            throw err
        })
    })
    .catch(err=>{
        throw err
    })
}


exports.PostAddProduct = (req,res,next)=>{
    

    Subcategory.findById(req.body.prodSubCategory)
    .then(subCat=>{
        var new_Product = new Product(req.body.prodName,req.body.prodPrice,req.body.prodDesc,subCat,req.files[0]['filename'],getGallery(req.files))
        return new_Product.save()
    }).then(add_product=>{
        return res.redirect('back')
    })
    .catch(err=>{
        throw err
    })
    
    
}

exports.getSub = (req,res,next)=>{
    Subcategory.getSub(req.params.sub_id)
    .then(_subcategroy => {
       return res.json(_subcategroy)
    })
    .catch(err=>{
        throw err
    })
}
