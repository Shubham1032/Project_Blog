import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <div>

            <div className='nav'>
                <ul>
                    <h4><li><Link to="/">Home</Link></li></h4>
                    <h4><li><Link to="/bollywood" >Bollywood</Link></li></h4>
                    <h4><li><Link to="/technology">Technology</Link></li></h4>
                    <h4><li><Link to="/hollywood">Hollywood</Link></li></h4>
                    <h4><li><Link to="/fitness">Fitness</Link></li></h4>
                    <h4><li><Link to="/food">Food</Link></li></h4>
                </ul>
            </div>

        </div>
    )
}
export default Nav;