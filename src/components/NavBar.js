import React from 'react';
import { AppBar } from '@material-ui/core';
import styled from 'styled-components';
import AvatarIcon from './AvatarIcon';


const Content = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

padding: 16px 24px;
  h1, h2, p {
    margin: 3px;
  }
  h2 {
    font-style: italic;
    font-size: 18px;
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`

const ContactInfo = styled.div`
text-align: right;
margin-right: 16px;
`

const NavBar = () => {
  return (
    <div>
      <AppBar position="fixed">
        <Content>
          <div>
            <h1>Code Gray</h1>
            <h2>Charter/Spectrum Front-End Code Challenge</h2>
          </div>
          <Row>
            <ContactInfo>
              <p><b>Chas Fricke</b></p>
              <p>frickec@gmail.com</p>
              <p>619-253-3602</p>
            </ContactInfo>
            <AvatarIcon />
          </Row>
        </Content>
      </AppBar>
    </div >
  )
}

export default NavBar;