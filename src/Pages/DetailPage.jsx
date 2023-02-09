import React from 'react'
import { Link } from "react-router-dom"
import SingleBlogPage from './SingleBlogPage'



const DetailPage = () => {
  

    return (
        <div className='main'>
        <SingleBlogPage/>
        <Link to="/">
             <button  style={{color:'white',backgroundColor:'green',width:'100px',height:'70px', borderRadius:'25px'}} >Go Home</button> 
             </Link>
        </div>
    )
}

export default DetailPage;