import React from 'react';
import {ErrorContainer, ErrorMessage, ManualMessage} from './styles';

const ShowError = ({error, manual_message}) => {
  return (
    <ErrorContainer>
      {/* error message shown here is rendering from the API call  */}
      <ErrorMessage>Error: {error}</ErrorMessage>
      {/* this is manual error message  */}
      <ManualMessage>{manual_message}</ManualMessage>
    </ErrorContainer>
  );
};

export default ShowError;
