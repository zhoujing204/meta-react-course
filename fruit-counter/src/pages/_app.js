// The corrected pages/_app.js

import React from "react";
import Fruits from "./Fruits"; // Adjust path if needed
import FruitsCounter from "./FruitsCounter"; // Adjust path if needed

// 1. Accept the special props from Next.js: { Component, pageProps }
function MyApp({ Component, pageProps }) {

  // 2. Your shared state can live here. It's "lifted up" above all pages.
  const [fruits] = React.useState([
      {fruitName: 'apple', id: 1},
      {fruitName: 'apple', id: 2},
      {fruitName: 'plum', id: 3},
  ]);

  return (
    // 3. Create a wrapper for your shared layout/providers.
    <div className="App">
      <h1>This title will now appear on EVERY page</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />

      <hr /> {/* Add a separator to see clearly */}

      {/*
        4. CRITICAL: Render the actual page component that Next.js passed in.
           This is where your `Home` component from `pages/index.js` will appear.
      */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;