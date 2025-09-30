
import React, { useState, useEffect } from 'react';

// 1. The custom hook for data fetching logic
const useData = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // In a real app, you would fetch data from the URL.
    // Here, we simulate a network request.
    const mockFetch = () => {
      if (url === '/desserts') {
        setData(['Cheesecake', 'Tiramisu', 'Apple Pie']);
      } else if (url === '/drinks') {
        setData(['Water', 'Soda', 'Juice', 'Coffee']);
      }
    };

    mockFetch();
  }, [url]); // This effect re-runs whenever the URL changes

  // The hook returns the data, giving the component full control.
  return data;
};

// 2. A component that uses the hook to get and display desserts
const DessertsCount = () => {
  const desserts = useData('/desserts');

  return (
    <p>Number of desserts available: {desserts.length}</p>
  );
};

// 3. A component that uses the hook to get and display drinks
const DrinksCount = () => {
  const drinks = useData('/drinks');

  return (
    <p>Number of drinks available: {drinks.length}</p>
  );
};

// 4. The main App component that renders everything
export default function App() {
  return (
    <div>
      <h2>Menu Availability</h2>
      <DessertsCount />
      <DrinksCount />
    </div>
  );
}
