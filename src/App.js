import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
// Provider somente com o Redux
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

// store é parte do redux e deve vir após as configurações do Reactotron
import { store, persistor } from './store';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
