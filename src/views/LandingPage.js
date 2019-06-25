import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

export default function LandingPage() {
    return (
        <div className="header">
            <div>
                <h1>Corporate Event Planner</h1>
                <p>An easy way to keep track of all the details and and people to coordinate the event </p>
                <p>Log in to see your upcoming events or sign up to get started!</p>
                <Link className="link" to='./login'>Log In</Link>
                <br></br>
                <Link className="link" to='./signup'>Sign Up Now!</Link> 
            </div>
        </div>
    )
}