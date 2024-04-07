import React from 'react';
import { Provider } from 'react-redux';
import store from './src/Redux/Store/Store';
import { HoldingScreens } from './src/Screens/HoldingsScreen';

const App = () => {
  return (
    <Provider store={store}>
      <HoldingScreens />
    </Provider>
  );
};

export default App;
