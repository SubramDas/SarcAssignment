import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import AddBook from './components/AddBook';
import Books from './components/Book/Books'
import BookDetail from './components/Book/BookDetail';
import { messaging } from './firebase';
import { getToken } from 'firebase/messaging';


function App() {
  async function requestPermission(){
    const permission = await Notification.requestPermission()
      if (permission === 'granted') {
        console.log('Notification permission granted.')

        const token= await getToken(messaging, {vapidKey: "BPRGMFtMm7qYR--4SzG1SSyU5hYeYNxUYB8gTicLxz6ycl81ST_ikQDmKo3HBQ_J83q8FEx968s7t8vvBY7qv1w"})
        console.log("Token:", token)
      }


  }

  useEffect(() => {
    requestPermission();
    }, [])
  
// messaging.onMessage(function(payload){
//   console.log("Message:", payload)
// })

//Oath



//CRON_JOB
// const cron=require("node-cron")
// const { MongoClient} = require("mongodb")
// const { google }= require("googleapis")
// const {authenticate}=require("@google-cloud/local-auth")

// const uri="mongodb://localhost:27017/newdata"
// const client=new MongoClient(uri,{useUnifiedTopology:true})

// const SCOPES=["https://www.googleapis.com/auth/drive.file"]
// const TOKEN_PATH='token.json'

// async function backupDatabase(){
//   try{
//     await client.connect()
//     const database=client.db
//     const collections= await database.collections()

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

// cron.schedule('2 * * * * *', backupDatabase)





  

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/add' element={<AddBook/>} exact/>
        <Route path='/books' element={<Books/>} exact/>
        <Route path='/books/:id' element={<BookDetail/>} exact/>

      </Routes>



    </>
  );
}

export default App;

