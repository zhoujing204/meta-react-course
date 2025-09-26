import { useRef } from 'react'

import './App.css'

function App() {
  const searchInputRef = useRef(null);

  const focusSearchInput = () => {
    searchInputRef.current.focus();
    searchInputRef.current.select();
  };

  const clearSearchInput = () => {
    searchInputRef.current.value = '';
    searchInputRef.current.focus();
  }


  return (
    <>
      <div className="App">
        <h1>Little Lemon Inventory Search</h1>
        <input
          type="text"
          ref={searchInputRef}
          placeholder='Search inventory...'
          style={{ padding: '10px', width: '300px', fontSize: '16px' }}
          />
          <button onClick={focusSearchInput}>Focus Search</button>
          <button onClick={clearSearchInput}>Clear & Focus</button>
      </div>

    </>
  );
}

export default App
