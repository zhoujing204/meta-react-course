import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = () => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(jsonData =>  {
        console.log('Fetched data:', jsonData);
        setUser(jsonData.results[0]);
      })
  }

  return (
    <>
      <div className="App">
        {Object.keys(user).length > 0 ? (
          <div>
            <h1> Data Returned </h1>
            <h2> First Name: {user.name.first}</h2>
            <h2> Last Name: {user.name.last}</h2>
          </div>
        ) : (
          <h1> Data loading... </h1>
        )}
      </div>
    </>
  )
}

export default App
