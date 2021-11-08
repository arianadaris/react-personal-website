import React from 'react';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';
import styled, {keyframes} from 'styled-components';
import MediaQuery from 'react-responsive';

function Header()
{
    return (
        <Container>
            <MediaQuery minWidth={480}>
                <Wrap>
                    <ItemText><StyledLink to="/" style={{ textDecoration: 'none' }}>Ariana Daris</StyledLink></ItemText>
                    <Nav>
                        <List>
                            <ListItem><StyledNavLink to="/about" activeClassName="active" style={{ textDecoration: 'none' }}>About</StyledNavLink></ListItem>
                            <ListItem><StyledNavLink to="/work" activeClassName="active" style={{ textDecoration: 'none' }}>Work</StyledNavLink></ListItem>
                            <ListItem><StyledNavLink to="/contact" activeClassName="active" style={{ textDecoration: 'none' }}>Contact</StyledNavLink></ListItem>
                        </List>
                    </Nav>
                </Wrap>
            </MediaQuery>
            <MediaQuery maxWidth={480}>
                <Wrap>
                    <ItemText><StyledLink to="/" style={{ textDecoration: 'none', fontSize: 18, float: 'left' }}>Ariana Daris</StyledLink></ItemText>
                    <Nav>
                        <List>
                            <ListItem><StyledNavLink to="/about" activeClassName="active" style={{ textDecoration: 'none', fontSize: 16 }}>About</StyledNavLink></ListItem>
                            <ListItem><StyledNavLink to="/work" activeClassName="active" style={{ textDecoration: 'none', fontSize: 16 }}>Work</StyledNavLink></ListItem>
                            <ListItem><StyledNavLink to="/contact" activeClassName="active" style={{ textDecoration: 'none', fontSize: 16, marginRight: '-50px' }}>Contact</StyledNavLink></ListItem>
                        </List>
                    </Nav>
                </Wrap>
            </MediaQuery>
        </Container>
    );
}

export default Header;

const appearKey = keyframes`
    0%
    {
        opacity: 0;
    }
    100%
    {
        opacity: 100%;
    }
`

const Container = styled.div`
    position: fixed;
    width: 100%;
    background-color: white;
    box-shadow: 0 3px 3px rgba(0,0,0,0.1);
    z-index: 1500;
    opacity: 0;
    animation: 1s ease-out 0s 1 ${appearKey};
    animation-fill-mode: forwards;
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
    border-bottom: 1.5px solid white;
`

const StyledNavLink = styled(NavLink)`
    &:hover
    {
        color: #80C3C3;
        border-bottom: 1.5px solid #7DB6A6;
    }
    transition: 0.2s ease all;
}
`

const StyledLink = styled(Link)`
    &:hover
    {
        color: #80C3C3;
    }
    transition: 0.2s ease all;
`