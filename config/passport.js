const passport = require('passport')
require('./stragie/local.strategy.js')()

module.exports=function passportConfig(app){
app.use(passport.initialize())
app.use(passport.session())
    //store user in session
passport.serializeUser((user,done)=>{
done(null,user)
});
//retireduse in session
passport.deserializeUser((user,done)=>{
    done(null,user)
    });


}