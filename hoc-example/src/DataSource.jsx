// Simple mock data source
const DataSource = {
  orders: [
    { id: 1, name: 'Pizza Margherita' },
    { id: 2, name: 'Pasta Carbonara' }
  ],

  users: [
    { id: 1, email: 'john@email.com' },
    { id: 2, email: 'jane@email.com' }
  ],

  listeners: [],

  // Add listener
  addChangeListener(callback) {
    this.listeners.push(callback);
    console.log('Listener added. Total listeners:', this.listeners.length);
  },

  // Remove listener
  removeChangeListener(callback) {
    this.listeners = this.listeners.filter(listener => listener !== callback);
    console.log('Listener removed. Total listeners:', this.listeners.length);
  },

  // Get orders
  getOrders() {
    return [...this.orders]; // Return a copy
  },

  // Get users
  getUsers() {
    return [...this.users]; // Return a copy
  },

  // Add new order
  addOrder(order) {
    this.orders.push(order);
    console.log('New order added:', order);
    console.log('Notifying', this.listeners.length, 'listeners');
    this.notifyListeners();
  },

  // Add new user
  addUser(user) {
    this.users.push(user);
    console.log('New user added:', user);
    console.log('Notifying', this.listeners.length, 'listeners');
    this.notifyListeners();
  },

  // Notify all listeners
  notifyListeners() {
    this.listeners.forEach(callback => {
      callback();
    });
  }
};

export default DataSource;