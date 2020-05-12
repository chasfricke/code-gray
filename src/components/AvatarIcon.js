import React from 'react';
import headshot from '../images/headshot.jpeg';
import styled from "styled-components";

const Avatar = styled.div`
  border-radius: 50px;
  overflow: hidden;
  height: 60px;
  width: 60px;
  img {
    height: 80px;
    position: relative;
    right: 10px;
    bottom: 2px;
  }
`

const AvatarIcon = () => {
  return (
    <Avatar>
      <img src={headshot} alt="headshot" />
    </Avatar>
  )
}

export default AvatarIcon;
