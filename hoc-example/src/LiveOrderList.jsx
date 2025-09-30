import React from 'react';
import withSubscription from './withSubscription';
import DataSource from './DataSource';

function LiveOrderList({ data }) {
    return (
        <div>
            <h2>Live Order List</h2>
            <ul>
                {data.map(order => (
                    <li key={order.id}>{order.name}</li>
                ))}
            </ul>
        </div>
    )
}

const WrappedOrderList = withSubscription(LiveOrderList, () => DataSource.getOrders());

export default WrappedOrderList;
