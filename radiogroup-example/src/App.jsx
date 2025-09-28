import React, { useState } from 'react'
import './App.css'

function RadioOption({ value, checked, onChange, children }) {
  return (
    <label>
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {children}
    </label>
  );
}

function RadioGroup({ children }) {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          checked: child.props.value === selectedValue,
          onChange: handleChange
        });
      })}
      <p>Selected Value: {selectedValue || 'None'}</p>
    </div>
  )
}


function App() {
  return (
    <div>
      <h1>Radio Group Example</h1>
      <RadioGroup>
        <RadioOption value="Apple">Apple 1</RadioOption>
        <RadioOption value="Orange">Orange 2</RadioOption>
        <RadioOption value="Banana">Banana 3</RadioOption>
      </RadioGroup>
    </div>
  )
}

export default App
