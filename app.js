const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mongoConnect = require('./Util/Database').mongoConnect
const app = express()

app.set('view engine','ejs');
app.set('views','Views')

const frontRoutes = require('./routes/front')
const adminRoutes = require('./routes/AdminRoute')


app.use(bodyParser.urlencoded({extend: false}))
app.use(express.static(path.join(__dirname,'public')))


app.use('/admin/',adminRoutes)
app.use(frontRoutes)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

mongoConnect(() =>{
    app.listen(3000)
})
