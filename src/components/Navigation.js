import React from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';
import Logo from '../assets/logo_white.svg';

export class Navigation extends React.Component{

    onLogout = () => {
        localStorage.removeItem('userToken');
        this.props.history.push('/')

    };

    render(){
        return (
            <HeaderStyled>
              <Link className="logo" to="/"><img src={Logo} alt={'logo'} /></Link>
                <MenuStyled>
                    <ul>
                        <Route
                            excat path="/"
                            render={() => {
                                if(localStorage.getItem('userToken')){
                                    return (
                                        <div>
                                            <Link className="link" to='./dashboard'>Home</Link>
                                            <Link className="link" to='/about'>About</Link>
                                            <a href='/'className="link" onClick={this.onLogout}>Log Out</a>
                                        </div>
                                    );
                                };
                                return (
                                    <div>
                                        <Link className="link" to='/'>Home</Link>
                                        <Link className="link" to='/about'>About</Link>
                                        <Link className="link" to='./login'>Log In</Link>
                                        <Link className="link" to='./signup'>Sign up</Link>
                                    </div>
                                )
                            }}
                        />
                    </ul>
                    </MenuStyled>
            </HeaderStyled>
        )
    }
}

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgb(19, 28, 36);
  //background: #333;
  color: white;
  height: 60px;
  
  .logo {
  display: flex;
  padding-left: 1.5rem;
    img {
      display: block;
      height: 50%;
      margin: auto;
    }
  }

  h2{
    margin: 15px 0;
    padding-left: 20px;
    font-size: 2.5rem;
  }
`;

const MenuStyled = styled.div`
  align-self: center;
  ul{
      margin: 20px 0;
  }
  .link{
    align-content: center;
    text-decoration: none;
    color: white;
    text-align: center;
    padding-right: 40px;
    padding-left: 40px;
    font-size: 2rem;
  }
   .login {
    width: 20%;
    padding: 5px 0px 5px 0px;
    padding-bottom:0;
  }
  .link:hover{
      color: yellow;
  }
`;

