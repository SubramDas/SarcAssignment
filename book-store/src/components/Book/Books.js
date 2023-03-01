import React, { useEffect, useState } from 'react'
import axios from "axios"
import Book from './Book';
import "./Book.css"

const url= "http://localhost:5000/books";


const fetchHandler =async()=>{
    return await axios.get(url).then(((res)=>res.data))
}

const Books = () => {
    const [books, setBooks] = useState();
    useEffect(() => {
      fetchHandler().then(data=>setBooks(data.books))
    },[])
    console.log(books);
    
  return (
    <div>
      <ul>

        {books && 
        books.map((books, i)=>(
            <li className="book" key={i}>
                <Book books={books}/>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Books
