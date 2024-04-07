import React from 'react';
import {ErrorContainer, ErrorMessage, ManualMessage} from './styles';

const ShowError = ({error, manual_message}) => {
  return (
    <ErrorContainer>
      {/* this is manual error message  */}
      <ManualMessage>{manual_message}</ManualMessage>
      {/* error message shown here is rendering from the API call  */}
      <ErrorMessage>Error: {error}</ErrorMessage>
    </ErrorContainer>
  );
};

export default ShowError;
