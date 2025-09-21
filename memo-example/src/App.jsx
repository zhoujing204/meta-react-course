import './App.css'
import React, { useMemo } from 'react';
import { AppContext, useAppContext } from './AppContext';


const App = () => {
  const a = 'hi';
  const b = 'bye';
  const value = useMemo(() => ({a, b}), [a, b]);

  return (
    <AppContext.Provider value={value}>
      <ComponentA />
    </AppContext.Provider>
  );
};

const ComponentA = React.memo(
  () =>
    <div>
      <h1> ComponentA </h1>
      <ComponentB />
    </div>
);
const ComponentB = () =>
<div>
  <h2> ComponentB </h2>
  <ComponentC />
</div>;

const ComponentC = () => {
  const contextValue = useAppContext(AppContext);
  console.log('ComponentC render', contextValue);
  return (
    <div>
      <h3> ComponentC </h3>
      <p> a: {contextValue.a} </p>
      <p> b: {contextValue.b} </p>
    </div>
  );
};

export default App
