import React from 'react';
import styled from 'styled-components';

  handleChange = async e => {
    await this.setState({ [e.target.name]: e.target.value });
  };
        <SignUpStyled>
            <h3>Sign Up Here</h3>
            <form>
                <input type="text" name="name" placeholder="Firt name" />
                <input type="text" name="name" placeholder="Last name" />
                <input type="text" name="email" placeholder="Email" />
                <input type="text" name="name" placeholder="Password" />
                <ButtonStyled>Sign Up Now</ButtonStyled>
            </form>
        </SignUpStyled>
        )
}


const SignUpStyled = styled.form`
    border: 1px solid white;
    border-radius: 2px;
    padding: 50px;
    background: #efefef;
    color: black;
    margin: 20px;
    margin-bottom: 20px;

    input {
        border: 1px solid rgba(255, 255, 255, 0.6);
        border-radius: 2px;
        padding-left: 10px;
        margin:10px;
        width: 220px;
        height: 30px;
    }
    /* button {
        width: 220px;
        font-size: 20px;
        background: white;
    } */
`;

const ButtonStyled = styled.button`
        width: 220px;
        font-size: 20px;
        background: white;
`;