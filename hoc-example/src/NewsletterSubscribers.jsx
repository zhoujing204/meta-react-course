import React from 'react';
import DataSource from './DataSource';
import withSubscription from './withSubscription';

function NewsletterSubscribers({ data }) {
    return (
        <div>
            <h2>Newsletter Subscribers</h2>
            <p>Total: {data.length}</p>
            <ul>
                {data.map(user => (
                    <li key={user.id}>{user.email}</li>
                ))}
            </ul>
        </div>
    );
}

const WrappedNewsletterSubscribers = withSubscription(
    NewsletterSubscribers,
    () => DataSource.getUsers()
);

export default WrappedNewsletterSubscribers;
