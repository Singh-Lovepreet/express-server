const passport = require('passport')
const {Strategy}= require('passport-local')

const {MongoClient,ObjectID} =require('mongodb');



module.exports=function locals(){


passport.use(new Strategy({
usernameField:'username',
passwordField:'password'

},(username,password,done)=>{

  const url1 ='mongodb+srv://love:lovepreet@cluster0-fx2qs.mongodb.net/test?retryWrites=true&w=majority'
const dbname ='db1';

    (async function mongo(){
      let client
        const user={  username,password  };
       
    try {
        client = await MongoClient.connect(url1,);
        console.log('connnectde witb')
        const db2 = client.db(dbname);
       const user= await db2.collection('user').findOne({username});
 

       if(user.password===password){


        done(null,user)
       }else  {
      done(null,false)
    }

    } catch (error) {
        console.log(error)
    }
    client.close();
    }())
  const user ={
      username,password
  };

done(null,user);
    }))

}