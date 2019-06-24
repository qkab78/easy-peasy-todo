import React from 'react';
import {StoreProvider, createStore} from 'easy-peasy';
import './App.css';
import model from './model'
import Todos from './components/todos/Todos';

const store = createStore(model);
function App() {
  return (
    <StoreProvider store={store}>
      <div className="App">
      <header className="App-header">
        <h1>Easy Peasy Todo App</h1>
      </header>
      <Todos/>
    </div>
    </StoreProvider>
  );
}

export default App;
