import React from 'react';
import { useMealsListContext } from './MealsContext';

const Counter = () => {
  // 1. Destructure both 'meals' and 'removeMeal' from the context
  const { meals, removeMeal } = useMealsListContext();

  return (
    <div>
      <h3>Number of meals today: {meals.length}</h3>
      {/* 2. Add a button with an onClick handler */}
      {/* Disable the button if there are no meals left to remove */}
      <button onClick={removeMeal} disabled={meals.length === 0}>
        Remove a Meal
      </button>
    </div>
  );
};

export default Counter;