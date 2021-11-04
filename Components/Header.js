import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function Header()
{
    return (
        <Container>
            <Wrap>
                <ItemText><Link to="/" style={{ textDecoration: 'none' }}>Ariana Daris</Link></ItemText>
                <Nav>
                    <List>
                        <ListItem><Link to="/about" style={{ textDecoration: 'none' }}>About</Link></ListItem>
                        <ListItem><Link to="/work" style={{ textDecoration: 'none' }}>Work</Link></ListItem>
                        <ListItem><Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link></ListItem>
                    </List>
                </Nav>
            </Wrap>
        </Container>
    );
}

export default Header;

const Container = styled.div`
    position: fixed;
    width: 100%;
    background-color: white;
    box-shadow: 0 3px 3px rgba(0,0,0,0.1);
    z-index: 1500;
`

const Wrap = styled.div`
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 40px;
    margin-right: 20px;
`

const ItemText = styled.h1`

`

const Nav = styled.div`
    height: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
`

const List = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
`

const ListItem = styled.li`
    font-size: 24px;
    margin-right: 50px;
    cursor: pointer;
`