const express = require('express')
const Router =express.Router();
const {MongoClient,ObjectID} =require('mongodb');

function router(nav){    
Router.route('/signup').post((req,res,next)=>{
    const url ='mongodb+srv://love:lovepreet@cluster0-fx2qs.gcp.mongodb.net/test?retryWrites=true&w=majority '
    const dbname ='db1';
     console.log(req.body.username)
    let client;
    (async function mongo(){
        const user={
          username:req.body.username
          ,password:req.body.password
        };
        let client;
    try {
        client = await MongoClient.connect(url,);
        console.log('connnectde witb')
        const db2 = client.db(dbname);
       const response= await db2.collection('user').insertOne(user);
       res.json(response)
    } catch (error) {
        console.log(error)
    }
    }())
    })
    return Router;
}
module.exports=router;