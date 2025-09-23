import './App.css'
import React, { useState, useRef } from 'react';
import { AppContext, useAppContext } from './AppContext';

const App = () => {
  const [counter, setCounter] = useState(0);
  const previousValue = useRef();

  const a = 'hi';
  const b = 'bye';

  // Toggle between these two lines to test:
  // const value = useMemo(() => ({a, b}), [a, b]); // ✅ With memoization
  const value = {a, b}; // ❌ Without memoization

  console.log('🔴 App rendered', counter);
  console.log('🔵 Same object reference?', previousValue.current === value);
  previousValue.current = value;

  return (
    <AppContext.Provider value={value}>
      <button onClick={() => setCounter(c => c + 1)}>
        Force Re-render ({counter})
      </button>
      <ComponentA />
    </AppContext.Provider>
  );
};

const ComponentA = React.memo(() => {
  console.log('🟡 ComponentA rendered');
  return (
    <div>
      <h1> ComponentA </h1>
      <ComponentB />
    </div>
  );
});

const ComponentB = () => {
  console.log('🟠 ComponentB rendered');
  return (
    <div>
      <h2> ComponentB </h2>
      <ComponentC />
    </div>
  );
};

const ComponentC = () => {
  const contextValue = useAppContext(AppContext);
  console.log('🟢 ComponentC rendered', contextValue);
  return (
    <div>
      <h3> ComponentC </h3>
      <p> a: {contextValue.a} </p>
      <p> b: {contextValue.b} </p>
    </div>
  );
};

export default App