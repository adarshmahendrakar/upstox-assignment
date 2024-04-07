import styled from 'styled-components/native';

export const CardContainer = styled.View`
  background-color: #fff;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2;
  }
  shadow-opacity: 0.2;
  shadow-radius: 2px;
  elevation: 2;
  padding: 10px;
`;

export const LoaderContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoaderText = styled.Text`
  margin-top: 10px;
  color: #000000;
`;

export const ErrorContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ErrorMessage = styled.Text`
  color: black;
`;

export const ManualMessage = styled.Text`
  color: red;
  margin-bottom: 10px;
  font-weight: bold;
`;
