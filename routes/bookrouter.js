const express = require('express')
const Router =express.Router();
const {MongoClient,ObjectID} =require('mongodb');

function router(nav){    
Router.route('/').get((req,res)=>{

const url ='mongodb+srv://love:lovepreet@cluster0-fx2qs.gcp.mongodb.net/test?retryWrites=true&w=majority '
const dbname ='db1';
(async function mongo(){

    let client;

    try {
        client = await MongoClient.connect(url,);

        console.log('connnectde witb')
        const db2 = client.db(dbname);
       const collection= await db2.collection('books')
             
       const books= await collection.find().toArray();

        res.render('book',{nav,books,title:'book'});
    
       // console.log(books)
    }catch(err){
console.log(err)

    }
client.close()
}())
    })

    Router.route('/:_id').get((req,res)=>{
    
        const url ='mongodb+srv://love:lovepreet@cluster0-fx2qs.gcp.mongodb.net/test?retryWrites=true&w=majority '
        const dbname ='db1';
        const {_id}= req.params;
        (async function mongo(){

            let client;
        
            try {
                client = await MongoClient.connect(url,);
        
                console.log('connnectde witb')
                const db2 = client.db(dbname);
               const collection= await db2.collection('books')
                     
               const book= await collection.findOne({_id:new ObjectID(_id)});

               res.render('bookid', {nav,title:'book',book} )
            
               console.log(book)
            }catch(err){
        console.log(err)
        
            }
        client.close()
        }())
      
      
        
         
    })
    return Router;
}



module.exports=router;