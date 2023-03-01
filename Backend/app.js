const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router=require("./routes/book-routes")
const cors=require('cors')

uri="mongodb://localhost:27017/newdata"

mongoose.set('strictQuery', true);
// uri="mongodb+srv://subram:AFJ3tZSVPy6Ry6vi@first.oyo0xbm.mongodb.net/First?retryWrites=true&w=majority"

//Middlewares-contains routes

app.use(express.json());
app.use(cors())
app.use("/books", router)


mongoose.connect(uri, 
    {useNewUrlParser: true,
    useUnifiedTopology: true,
     }).then(() => {console.log(`Connected to Database`)}).then(() => {
            app.listen(5000); //app starts at port 5000
        }).catch((err)=> console.log(err)); //catches error if any


        // const cron=require("node-cron")
        // const { MongoClient} = require("mongodb")
        // const { google }= require("googleapis")
        // const {authenticate}=require("@google-cloud/local-auth")
        
        // // const uri="mongodb://localhost:27017/newdata"
        // const client=new MongoClient(uri,{useUnifiedTopology:true})
        
        // const SCOPES=["https://www.googleapis.com/auth/drive.file"]
        // const TOKEN_PATH='token.json'
        
        // async function backupDatabase(){
        //   try{
        //     await MongoClient.connect()
        //     const database=MongoClient.getDatabase("newdata")
        //     const collections= await database.getCollection("newdata")
        
        //     const backup=await Promise.all(
        //       collections.map(async (collection)=>({
        //         name:`${collection.collectionName}-${new Date().toISOString().json}`,
        //         data: JSON.stringify(await collection.find().toArray()),
        //       }))
        //     )
        
        //     const auth=await authenticate({
        //       keyfilePath:"credentials.json"
        //       ,scopes:SCOPES
        //     })
        //     const drive=google.drive({version:"v3",auth})
        
        //     for (const file of backup){
        //       const fileMetadata={
        //         name: file.name,
        //         parents:["https://drive.google.com/drive/folders/1F4doMoEizUIPU0xDlqET-hVZD2yjg4_W?usp=sharing"]
        //       }
        //       const media={
        //         mimeType:"application/json",
        //         body:file.data
        //       }
        //       await drive.files.create({
        //         resourse: fileMetadata,
        //         media: media,
        //         fields:"id"
        //       })
        //     }
        //     console.log("BACKUP SUCCESS")
        //   }catch(err){
        //     console.log(err)
        //   }finally{
        //     await client.close()
        //   }
        // }
        
        // cron.schedule('*/59 * * * * *', backupDatabase)
        




        // AFJ3tZSVPy6Ry6vi