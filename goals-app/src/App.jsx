import { useState } from 'react'

import './App.css'
import  GoalForm  from './GoalForm'
import { GoalsList } from './GoalsList'

function App() {

  const [allGoals, updateAllGoals] = useState([]);

  const addGoal = (goalEntry) => {
    const goalWithId = {
      ...goalEntry,
      id: Date.now() + Math.random() // Simple unique ID
      // or use: id: crypto.randomUUID() in modern browsers
    };
    updateAllGoals([...allGoals, goalWithId]);
  };


  return (
    <div className="App">
      <h1>My Goals</h1>
      <GoalForm onAddGoal={addGoal} />
      <GoalsList allGoals={allGoals} />
    </div>
  );
}

export default App
