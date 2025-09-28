import './App.css'
import React from 'react'

const Row = ({children, spacing}) => {
  return (
    <div style={{ display: 'flex' }}>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            marginLeft: index > 0 ? `${spacing}px` : 0
          }
        });
      })}
    </div>
  );
}

function App() {


  return (
    <>
      <div className="App">
        <h1>New Flex Live Order</h1>
        <Row spacing={32}>
          <p>Pizza Margarita</p>
          <p>2</p>
          <p>$20.00</p>
          <p>18:30</p>
          <p>John</p>
        </Row>
      </div>
    </>
  )
}

export default App
