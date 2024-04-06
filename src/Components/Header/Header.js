import React from 'react';
import {HeaderContainer, Title} from './HeaderStyles';

const Header = ({title}) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

export default Header;
