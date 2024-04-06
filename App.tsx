import React from 'react';
import { Provider } from 'react-redux';
import { HoldingScreens } from './src/Screens/HoldingsScreen';
import store from './src/Redux/Store/Store';

const App = () => {
  return (
    <Provider store={store}>
      <HoldingScreens />
    </Provider>
  );
};

export default App;
