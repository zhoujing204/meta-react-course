import React, { useState, useEffect } from 'react';
import DataSource from './DataSource';

function withSubscription(WrappedComponent, selectData) {
  return function SubscriptionComponent(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
      const handleChange = () => {
        // This function will be called when data changes
        setData(selectData());
      };

      // Load initial data
      handleChange();

      // Subscribe to changes
      DataSource.addChangeListener(handleChange);

      // Cleanup on unmount
      return () => {
        DataSource.removeChangeListener(handleChange);
      };
    }, []);

    return <WrappedComponent data={data} {...props} />;
  };
}

export default withSubscription;