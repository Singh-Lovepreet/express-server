const express = require('express')
const ar =express.Router();
const {MongoClient} =require('mongodb');

function router(nav ){
ar.route('/').get((req,res)=>{

const url ='mongodb+srv://love:lovepreet@cluster0-fx2qs.gcp.mongodb.net/test?retryWrites=true&w=majority '
const dbname ='db1';

(async function mongo(){
    let client;
    try {
        client = await MongoClient.connect(url,);

        console.log('connnectde witb')
        const db2 = client.db(dbname);
       const response= await db2.collection('books').insertMany(books);
       res.json(response)
    } catch (error) {
        console.log(error)
    }

}())
});
return ar;
}
module.exports=router;