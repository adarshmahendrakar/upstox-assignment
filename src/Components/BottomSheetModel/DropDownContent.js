import React from 'react';
import {DropDownContainer, LeftText, RightText, Row} from './Styles/BottomSheetStyles';

const DropDownDetails = ({value, leftTitle}) => {
  return (
    <DropDownContainer>
      <Row>
        <LeftText>{leftTitle} </LeftText>
        <RightText>{value}</RightText>
      </Row>
    </DropDownContainer>
  );
};

export default DropDownDetails;
