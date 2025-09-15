import { createContext, useContext } from 'react';

// 1. Define the data (or it could be passed into the Provider)
const todaysMeals = ["Baked Beans", "Baked Sweet Potatoes", "Baked Potatoes"];

// 2. Create and export the context
export const MealsContext = createContext();

// 3. Create and export the custom hook
export const useMealsListContext = () => {
  const context = useContext(MealsContext);
  if (context === undefined) {
    throw new Error("useMealsListContext must be used within a MealsProvider");
  }
  return context;
};

// You can also export the initial data if needed elsewhere
export { todaysMeals };