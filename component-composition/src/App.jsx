import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Generic Button component
function Button({ children, color = 'blue' }) {
  return (
    <button style={{ backgroundColor: color }}>
      {children}
    </button>
  );
}

// Generic Alert component (containment)
function Alert({ children }) {
  return (
    <div className="overlay">
      <div className="modal">
        {children}
      </div>
    </div>
  );
}

// Specialized DeleteButton (specialization)
function DeleteButton() {
  return (
    <Button color="red">
      Delete
    </Button>
  );
}

// Final composed component
function DeleteAccountDialog() {
  return (
    <Alert>
      <h2>Delete Account</h2>
      <p>You'll miss out on the chef's delicious recipes!</p>
      <DeleteButton />
    </Alert>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <DeleteAccountDialog />
    </>
  )
}

export default App
