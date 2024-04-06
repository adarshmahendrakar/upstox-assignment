import React from 'react';
import {CardContainer} from './styles';

export const Card = ({children}) => {
  return (
    // CardContainer is styled component.
    <CardContainer
      // style={{borderBottomColor: "#a9a9a9", borderBottomWidth: 0.5}} this is to show about the Inline CSS which is not recommended
      style={{borderBottomColor: '#a9a9a9', borderBottomWidth: 0.5}}>
      {children}
    </CardContainer>
  );
};
