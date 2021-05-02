const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mongoConnect = require('./Util/Database').mongoConnect
const app = express()
const multer = require("multer")
const getFileName = require("./Util/helper").getFileName

const session = require("express-session")

app.set('view engine','ejs');
app.set('views','Views')

const frontRoutes = require('./routes/front')
const adminRoutes = require('./routes/AdminRoute')

const fileStorage = multer.diskStorage({
    destination: (req,res,cb)=>{
        cb(null,'Public/images/products')
    },
    filename:(req,file,cb)=>{
        const ext = file.originalname.split(".")
        cb(null,file.fieldname + "-" + getFileName() + "." +ext[ext.length-1])
    }
})


app.use(multer({storage:fileStorage}).any("gallery","featured"))
app.use(bodyParser.urlencoded({extend: false}))
app.use(express.static(path.join(__dirname,'public')))
app.use(session({secret:'my secret',resave: false,saveUninitialized: false,}))

app.use('/admin/',adminRoutes)
app.use(frontRoutes)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

mongoConnect(() =>{
    app.listen(3000)
})
