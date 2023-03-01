import React, { useState } from "react";
import {
  TextField,
  FormLabel,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import axios from "axios";
import {useNavigate} from "react-router-dom"










const AddBook = () => {

//   const {google}=require("googleapis")
//   const serviceAccount=require("../book-store-cb665-firebase-adminsdk-pymof-db881e3388.json")
//   const scopes = [
//   "https://www.googleapis.com/auth/userinfo.email",
//   "https://www.googleapis.com/auth/firebase.database"
//   ];

// var jwtClient = new google.auth.JWT(
//   serviceAccount.client_email,
//   null,
//   serviceAccount.private_key,
//   scopes
// );

// jwtClient.authorize(function(error, tokens) {
//   if (error) {
//     console.log("Error making request to generate access token:", error);
//   } else if (tokens.access_token === null) {
//     console.log("Provided service account does not have permission to generate access tokens");
//   } else {
//     const accessToken = tokens.access_token;
//   }
// });


  const [inputs, setInputs] = useState({
    name: "",
    desc: "",
    price: "",
    author: "",
    image: "",
  });
  const history=useNavigate()
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest=async()=>{
    await axios.post("http://localhost:5000/books",{
      name:String(inputs.name),
      author: String(inputs.author)
      ,desc: String(inputs.desc),
      price: (inputs.price),
      image: String(inputs.image),
      available: Boolean(checked)
    }).then(res=>res.data);
  }




  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(()=>history('/books'))
  };

  //Web-push implementation
//   const https = require('https');
// // const { google } = require('googleapis');

// const PROJECT_ID = 'book-store-cb665';
// const HOST = 'fcm.googleapis.com';
// const PATH = '/v1/projects/' + PROJECT_ID + '/messages:send';
// const MESSAGING_SCOPE = 'https://www.googleapis.com/auth/firebase.messaging';
// const SCOPES = [MESSAGING_SCOPE];
//   function getAccessToken() {
//     return new Promise(function(resolve, reject) {
//       const key = require('../placeholders/service-account.json');
//       const jwtClient = new google.auth.JWT(
//         key.client_email,
//         null,
//         key.private_key,
//         SCOPES,
//         null
//       );
//       jwtClient.authorize(function(err, tokens) {
//         if (err) {
//           reject(err);
//           return;
//         }
//         resolve(tokens.access_token);
//       });
//     });
//   }


  const sendNotification=()=>{
    const token= ("cER57RJI78-SCDSGhhq9Ya:APA91bEiJVRo_xcjI2_GLHtHnroiD5lXCKPZn5h8xRTK6nwaIhhMWn32w7gIZOE9glleKY30IfEH_twCXuWI-IOs9lg52J_mXm1mIkhzOjxWwwYalXkZZ4KJZTjQCwBS8c13mAsYukc6")
    const title="New Book Added"
    const msg="Have a LOOK"

    let body={
      to: token,
      notification:{
        title:title,
        body:msg
      }
    }
    let options={
      method:"POST",
      headers: {
        "Authorization":"Bearer accessToken",
        "Content-Type":"application/json"},
        'body':JSON.stringify(body)
    }
    fetch("https://fcm.googleapis.com/v1/projects/book-store-cb665/messages:send", options).then(res=>{
      console.log(res,":SENT")
    }).catch(e=>console.log(e))
    console.log(body)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent="center"
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={10}
      >
        <FormLabel> Name </FormLabel>
        <TextField
          value={inputs.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
        />

        <FormLabel> Image </FormLabel>
        <TextField
          value={inputs.image}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
        />

        <FormLabel>Author</FormLabel>
        <TextField
          value={inputs.author}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
        />

        <FormLabel>Description</FormLabel>
        <TextField
          value={inputs.desc}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="desc"
        />

        <FormLabel>Price</FormLabel>
        <TextField
          value={inputs.price}
          onChange={handleChange}
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
        />
        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          }
          label="Available"
        />
        <Button type="submit" variant="contained" onClick={sendNotification}>
          Add Book
        </Button>
      </Box>
    </form>
  );
};

export default AddBook;
