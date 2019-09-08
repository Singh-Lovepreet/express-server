const express = require('express')
const Router =express.Router();
const {MongoClient,ObjectID} =require('mongodb');
const passport =require('passport')
function router(nav){    
Router.route('/signup').post((req,res,next)=>{

const {username,password } = req.body
//const url ='mongodb+srv://love:lovepreet@cluster0-fx2qs.gcp.mongodb.net/test?retryWrites=true&w=majority '
 
const url1 ='mongodb+srv://love:lovepreet@cluster0-fx2qs.mongodb.net/test?retryWrites=true&w=majority'
const dbname ='db1';

    (async function mongo(){
      let client
        const user={  username,password  };
       
    try {
        client = await MongoClient.connect(url1,);
        console.log('connnectde witb')
        const db2 = client.db(dbname);
       const response= await db2.collection('user').insertOne(user);
  //   console.log(response)
    } catch (error) {
        console.log(error)
    }
    client.close();
    }())

     })
Router.route('/profile').get((req,res)=>{

   res.json(req.user)
  
})

Router.route('/signin').get((req,res)=>{


   res.render('signin',{nav,title:'signin'})

}).post(passport.authenticate('local',{successRedirect:'/auth/profile',

failureRedirect:'/'
}))
    return Router;
}
module.exports=router;