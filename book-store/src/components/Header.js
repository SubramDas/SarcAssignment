import React from 'react'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import styled from 'styled-components'
import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <>
    <Headers>
        <HeadWrapper>
            <LeftWrapper>
                <Images><AutoStoriesIcon/></Images>
                <Tabs>The Books Library</Tabs>
            </LeftWrapper>
            <RightWrapper>

                <AddProduct><NavLink to="/books" style={{ textDecoration: 'none' , color: "white"}}>Books</NavLink></AddProduct>
                {/* <AddProduct><NavLink to="/" style={{ textDecoration: 'none' , color: "white"}}></NavLink></AddProduct> */}
                <AddProduct><NavLink to="/add" style={{ textDecoration: 'none', color: "white"}}>Add Product</NavLink></AddProduct>
            </RightWrapper>
        </HeadWrapper>
    </Headers>

    {/* <AppBar position='sticky'>
        <Typography><AutoStoriesIcon/></Typography>
    </AppBar> */}
      
    </>
  )
}

const Headers = styled.div`
    position: sticky;
    border: 2px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 10vh;
    background-color: black;
`
const HeadWrapper=styled.div`
    border: 2px solid red;
    display: flex;
    width: 90vw;
    justify-content: center;
    flex-direction: initial;
    align-items: center;
    margin-left: 0;
    margin-right: auto;
    `
const LeftWrapper=styled.div`
    border: 2px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: initial;
    width: 20vw;
    margin: inherit;
    `
    const Tabs=styled.div`
        border: 2px solid red;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 20px;
    `
    const Images=styled.div`
        justify-content: center;
        display: flex;
        align-items: center;
        border: 2px solid red;  
        height: 5vh;
        color: white;
        margin: 2px 2px;
    `
const RightWrapper=styled.div`
    border: 2px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: initial;
    width: 10vw;
`
const AddProduct=styled.div`
    text-decoration: none;
    border: 2px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 5vw;
    color: white;
    cursor: pointer;
`



export default Header
