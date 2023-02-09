import React from 'react'
import { useLocation } from 'react-router-dom'

const SingleBlogPage = () => {
    const location = useLocation();
    const { title, img, description } = location.state;
    console.log(title)
    return (
        <div className='single__page'>
            <h1 style={{color:'red'}}>{title}</h1>
            <img src={img} alt="" />
            <p>{description}</p>
        </div>
    )
}

export default SingleBlogPage;