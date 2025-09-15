import React, { useState } from 'react';
import { MealsContext, todaysMeals } from './MealsContext';

const MealsProvider = ({ children }) => {
  const [meals, setMeals] = useState(todaysMeals);

  const handleRemoveMeal = () => {
    setMeals((prevMeals) => prevMeals.slice(0, prevMeals.length - 1));
  };

  // 1. Create a function that adds a new meal
  const handleAddMeal = () => {
    // For simplicity, we'll add a static meal.
    // A real app might take an input from the user.
    const newMeal = `New Meal #${Math.floor(Math.random() * 100)}`;
    setMeals((prevMeals) => [...prevMeals, newMeal]);
  };

  // 2. Add the new function to the context value
  const contextValue = {
    meals,
    removeMeal: handleRemoveMeal,
    addMeal: handleAddMeal, // <-- Pass the new function
  };

  return (
    <MealsContext.Provider value={contextValue}>
      {children}
    </MealsContext.Provider>
  );
};

export default MealsProvider;