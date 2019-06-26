import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { Navigation, NavigationLoggedin } from '../components/Navigation';
import Footer from'../components/Footer';

export default function LandingPage() {
    return (
        <div>
            {/* <Route 
                exact path="/"
                render={() => {
                   if(localStorage.getItem('userToken')){
                       return(
                        <NavigationLoggedin />
                       );
                   };
                   return (
                    <Navigation />
                   <Redirect to='login' />
                   )
                }}
            
            /> */}
            <Navigation/>
            <Homestyled>
                <div className="text-wrapper">
                    <div className="text">
                        <h1>Corporate Event Planner</h1>
                        <p>An easy way to keep track of all the details and and people to coordinate the event </p>
                        <p>Log in to see your upcoming events or sign up to get started!</p>
                        <LinkStyled>
                        <Link className="link" to='./login'>Log In</Link> 
                        <Link className="link" to='./signup'>Sign Up Now!</Link> 
                        </LinkStyled>
                    </div>
                    {/* <div className="img-wrap">
                        <img className="img" src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="party"/>
                    </div> */}
                </div>
            </Homestyled>
            <Footer/>
        </div>
    )
}

const Homestyled = styled.div`
    /* .text-wrapper{
        background-color: blue;
        color: black;
        text-align: left;
        padding: 16px 24px 16px 80px;
    }
    .image-wrapper{
        text-align: right;
        background-color: red;
        background: linear-gradient(rgba(10, 10, 10), rgba(30, 30, 30, 0.1)), url("https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"); 
      width: calc(100vw - 45vw);
        height: 10%;
        display: flex;
        align-items: center;
        position: relative; 
        -webkit-box-align: left;
        -webkit-box-pack: end;
        position: absolute;
        border-bottom: 50vh solid;
        border-left: 100vw solid transparent;
        border-right: 20vw solid;
        width: 100%;
        top: 0; 
        right: 0;
} */
    /* } */
    /* width: 100%; */

    color: black;
    background-color: white;
    text-align: center;
    width: 100%;
    padding-bottom: 20px;
    /* background: linear-gradient(rgba(10, 10, 10), rgba(30, 30, 30, 0.1)), url("https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"); */
    .text-wrapper{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 25px;
    }
    .text{
        padding:16px 24px 16px 80px;
        width: 150%;
        
    }
    /* .img{
        width: 100%;
        height: 100%;
        align-content: right;
        border-bottom-color: blue;
        width: 100%;
        height: 100%;
       

    } */

   
;
`;

const LinkStyled = styled.div`
    /* margin: 40px;
    width: 100%; */

    .link{
        align-content: center;
        text-decoration: none;
        color: black;
        text-align: center;
        border: 1px solid black;
        border-radius: 10px;
        padding: 10px;
        margin-left: 50px;
        margin-top: 20px;
        width: 80%;
    }
    .link:hover{
        color: yellow;
        border-color: black;
        /* background-color: grey; */
    }
`;