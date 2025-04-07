import classes from '../styles/Navbar.module.css'
import { Link } from 'react-router-dom'
import React from 'react';

// Add log out
export default function Navbar() {
    const token = localStorage.getItem('token');
    return (
        <header>
            <div className={classes.wrapper}>
                <div className="logo">
                </div>
                <nav>
                <div className={classes.tab}>
                        <Link to='/homepage'>Homepage</Link>
                    </div>
                    <div className={classes.tab}>
                        <Link to='/signup'>Sign Up</Link>
                    </div>
                    <div className={classes.tab}>
                        <Link to='/login'>Log In</Link> 
                    </div>
                    <div className={classes.tab}>
                    <Link to='/posts'>Posts</Link>
                    </div>
                    <div className={classes.tab}>
                    <Link to='/create-post'>New Post</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}