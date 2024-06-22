import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Options = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('/api/items');
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addItem = async () => {
    try {
      const response = await axios.post('/api/items', { name: newItem });
      setItems([...items, response.data]);
      setNewItem('');
    } catch (error) {
      console.error(error);
    }
  };

  async function editItem(itemId, newName) {
    try {
      await axios.put(`/api/items/${itemId}`, { name: newName });
      const updatedItems = items.map(item => {
        if (item.id === itemId) {
          return { ...item, name: newName };
        }
        return item;
      });
      setItems(updatedItems);
      setEditItem(null);
    } catch (error) {
      console.error(error);
    }
  }

  const deleteItem = async (itemId) => {
    try {
      await axios.delete(`/api/items/${itemId}`);
      const updatedItems = items.filter(item => item.id !== itemId);
      setItems(updatedItems);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {editItem === item.id ? (
              <input
                type="text"
                value={item.name}
                onChange={e => editItem(item.id, e.target.value)}
              />
            ) : (
              <span>{item.name}</span>
            )}
            <button onClick={() => setEditItem(item.id)}>Edit</button>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default Options;