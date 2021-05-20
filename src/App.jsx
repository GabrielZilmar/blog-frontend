import React from 'react';
import './App.css';

import Posts from './pages/posts';
import Header from './layout/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Posts />
      </header>
    </div>
  );
}

export default App;
