import React from 'react'
import {  NavLink, useNavigate } from 'react-router-dom';
import  styled  from 'styled-components';
import './Book.css'
import axios from 'axios'


const Book = (props) => {
    const history=useNavigate()
    const {_id, name, author, desc, price, image}=props.books;
    const deleteHandler = async ()=>{
        await axios.delete(`http://localhost:5000/books/${_id}`).then(res=>res.data).then(()=>window.location.reload(true)).then(()=> history('/books'))
    }
        return (
    <div className='card'>
        <img src={image} alt={name} />
        <article>By {author}</article>
        <h3>{name}</h3>
        <p>{desc}</p>
        <h2>Rs. {price}</h2>
        <Buttons><NavLink to={`/books/${_id}` } style={{ textDecoration: 'none' , color: "black"}}>Update</NavLink></Buttons>      
        <Buttons onClick={deleteHandler}>Delete</Buttons>      
    </div>
  )
}

const Buttons= styled.button`
    cursor: pointer;
    margin: 1vh 1vw;
    font-size: large;
`

export default Book
