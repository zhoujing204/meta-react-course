import React from 'react';
import { useMealsListContext } from './MealsContext';

const MealsList = () => {
  // 1. Destructure the new 'addMeal' function from the context
  const { meals, addMeal } = useMealsListContext();

  return (
    <div>
      <h1>Meals List</h1>
      {/* 2. Add a button to trigger the addMeal function */}
      <button onClick={addMeal}>Add a New Meal</button>

      {/* Map over the meals array and display each item */}
      {meals.map((meal, index) => (
        <h2 key={index}>{meal}</h2>
      ))}
    </div>
  );
};

export default MealsList;