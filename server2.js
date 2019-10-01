const express = require('express')
const path = require('path')
const app = express();
const bp =require('body-parser')
const passport =require('passport')
const cookieParser =require('cookie-parser')
const session = require('express-session')
var port = process.argv[2]

app.set('views','./views')
app.set('view engine', 'ejs');
const nav =[{link:'/first',title:'first'},
{ link:'/second',title:'second'},
{link:'/third',title:'third'}]
const Router =require('./routes/bookrouter')(nav);
const ar =require('./routes/adminroute')(nav);
const auth =require('./routes/newroute')(nav);
app.use(bp.json());
app.use(bp.urlencoded({extended:false}));
app.use(cookieParser())
require('./config/passport.js')(app)
app.use(session({secret:'love'}))
app.use((req,res,next)=>{

    console.log("middle ware")
    next();
})
app.use('/first',Router)    
app.use('/admin',ar)
app.use('/auth',auth)
app.use('/first',Router)
app.use('/admin',ar)
app.use('/auth',auth)app.use('/first',Router)
app.use('/admin',ar)
app.use('/auth',auth)app.use('/first',Router)
app.use('/admin',ar)
app.use('/auth',auth)
// app.use('/auth',auth)
app.get('/', (req, res) => {
  
    res.render('index',{nav:[{link:'/first',title:'first'},
   { link:'/second',title:'second'},{link:'/third',title:'third'}],title:'hello'})
});
var port = process.argv[2]
app.listen(port, () => { 
    console.log(`running on ${port}`)
})