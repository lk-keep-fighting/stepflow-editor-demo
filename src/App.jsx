import logo from './logo.svg';
import { Editor } from '@stepflow/editor'
import './App.css';
import React from 'react';
import {initData} from './CustomLeftPanel'

function App() {
  return (
    <div className="App">
      <Editor
      />
    </div>
  );
}

export default App;
