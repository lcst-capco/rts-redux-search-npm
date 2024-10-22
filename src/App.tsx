import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import './App.css';
import RepositoriesList from './components/repositories-list';

function App() {
  return (
    <Provider store={store}>
      <h1>Search for an NPM package</h1>
      <RepositoriesList />
    </Provider>
  );
}

export default App;
