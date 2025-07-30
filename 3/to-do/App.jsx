import { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList'; // ✅ Import your component

function App() {
  return (
    <>
      <ToDoList /> {/* ✅ Render the ToDoList here */}
    </>
  );
}

export default App;
