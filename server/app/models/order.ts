export interface Order {
    id: string;
    userId: string;
    items: string[]; // Array of product IDs (for simplicity)
    totalAmount: number;
    userContact: string;
    status: string;
    createdAt: Date;
  }
  
  const orders: Order[] = [];
  
  export function saveOrder(order: Order): Order {
    orders.push(order);
    return order;
  }
  
  export function findOrderById(id: string): Order | undefined {
    return orders.find(order => order.id === id);
  }