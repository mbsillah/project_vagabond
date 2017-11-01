import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const List = styled.div`
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: tan;
    opacity: .8;
    margin-bottom: 0px;
    padding-bottom: 2px;
    letter-spacing: 2px;
    ul {
        display: flex;
        justify-content: space-around;
        list-style-type: none;
        padding-top: 2px;
        padding-bottom: 2px;
        font-family: 'Cabin Condensed', sans-serif;
        margin-top: 0px;
        margin-bottom: 0px;
    }






/* 
ul {
    display: flex;   
    justify-content: space-around; 
    list-style-type: none;
}

li {
    background-color: yellow;
    padding: 5px;
    border-radius: 40px;
}

a {
    color: navy
} */
`

const NavBar = () => {
    return (
        <List>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/login">Log In/Sign Up</Link></li>
            <li><Link to="/">Log Out</Link></li>
        </ul>
        </List>
    );
};

export default NavBar;