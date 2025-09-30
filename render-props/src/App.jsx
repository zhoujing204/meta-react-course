import React, { useState, useEffect } from 'react';

// 1. The reusable component with a render prop
const DataFetcher = ({ url, render }) => {
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
  }, [url]);

  // The component calls the render prop with the data it fetched,
  // letting the parent decide how to display it.
  return render(data);
};

// 2. A component that uses DataFetcher to show dessert count
const DessertsCount = () => {
  return (
    <DataFetcher
      url="/desserts"
      render={(data) => (
        <p>Number of desserts available: {data.length}</p>
      )}
    />
  );
};

// 3. A component that uses DataFetcher to show drink count
const DrinksCount = () => {
  return (
    <DataFetcher
      url="/drinks"
      render={(data) => (
        <p>Number of drinks available: {data.length}</p>
      )}
    />
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
