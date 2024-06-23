import React, { useState } from 'react';
import { addItem } from './apiService';

function AddItemForm({ onItemAdded }) {
  const [itemName, setItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ name: itemName }).then(() => {
      onItemAdded();
      setItemName('');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Enter item name"
        required
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddItemForm;