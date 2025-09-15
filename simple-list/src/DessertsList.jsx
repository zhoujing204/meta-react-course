import React from "react";

function DessertsList(props) {
  if (!props.data.length) {
    return <div>No desserts available</div>;
  }

  const dessertItems = props.data.map(dessert => (
    <li key={dessert.id || dessert.name}>
      <strong>{dessert.name}</strong> - {dessert.calories} calories
    </li>
  ));

  return (
    <div>
      <ul>
        {dessertItems}
      </ul>
    </div>
  );
}

export default DessertsList;
