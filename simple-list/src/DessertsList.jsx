import React, { useState } from "react";

function DessertsList(props) {
  const [dessertOrder, setDessertOrder] = useState('normal'); // normal, reversed, caloriesAsc, caloriesDesc
  const [newDessertName, setNewDessertName] = useState('');
  const [newDessertCalories, setNewDessertCalories] = useState('');
  const [desserts, setDesserts] = useState(props.data);

  if (!desserts.length) {
    return <div>No desserts available</div>;
  }

  let dessertsToDisplay = [...desserts];

  // Apply sorting based on the current order state
  switch (dessertOrder) {
    case 'normal':
      // Sort by names
      dessertsToDisplay = dessertsToDisplay.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      break;
    case 'reversed':
      // Sort by names and then reverse
      dessertsToDisplay = dessertsToDisplay
        .sort((a, b) => a.name.localeCompare(b.name))
        .reverse();
      break;
    case 'caloriesAsc':
      // Sort by calories ascending
      dessertsToDisplay = dessertsToDisplay.sort((a, b) =>
        a.calories - b.calories
      );
      break;
    case 'caloriesDesc':
      // Sort by calories descending
      dessertsToDisplay = dessertsToDisplay.sort((a, b) =>
        b.calories - a.calories
      );
      break;
    default:
      break;
  }

  const toggleNameOrder = () => {
    setDessertOrder(dessertOrder === 'normal' ? 'reversed' : 'normal');
  };

  const toggleCaloriesOrder = () => {
    if (dessertOrder === 'caloriesAsc') {
      setDessertOrder('caloriesDesc');
    } else {
      setDessertOrder('caloriesAsc');
    }
  };

  const handleNameChange = (e) => {
    // Remove any existing " new" suffix before updating
    let value = e.target.value;
    if (value.endsWith(' new')) {
      setNewDessertName(value);
    } else {
        setNewDessertName(value + ' new');


    }
  };

  const handleCaloriesChange = (e) => {
    setNewDessertCalories(e.target.value );
  };

  const handleAddDessert = () => {
    if (newDessertName.trim() && newDessertCalories.trim()) {
      // When adding dessert, ensure it ends with " new" if user didn't already add it
      const dessertName = newDessertName.endsWith(' new')
        ? newDessertName
        : newDessertName + ' new';

      const newDessert = {
        id: Date.now(), // Simple ID generation
        name: dessertName,
        calories: parseInt(newDessertCalories, 10)
      };

      setDesserts([...desserts, newDessert]);
      setNewDessertName('');
      setNewDessertCalories('');
    }
  };

  const dessertItems = dessertsToDisplay.map(dessert => (
    <li key={dessert.id || dessert.name}>
      <strong>{dessert.name}</strong> - {dessert.calories} calories
    </li>
  ));

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Dessert name"
          value={newDessertName}
          onChange={handleNameChange}
        />
        <input
          type="number"
          placeholder="Calories"
          value={newDessertCalories}
          onChange={handleCaloriesChange}
        />
        <button onClick={handleAddDessert}>Add Dessert</button>
      </div>
      <button onClick={toggleNameOrder}>
        {dessertOrder === 'normal' ? 'Reverse List' : 'Restore Order'}
      </button>
      <button onClick={toggleCaloriesOrder}>
        {dessertOrder === 'caloriesAsc' ? 'Sort by Calories Descending' : 'Sort by Calories Ascending'}
      </button>
      <ul>
        {dessertItems}
      </ul>
    </div>
  );
}

export default DessertsList;