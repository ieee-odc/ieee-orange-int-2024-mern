import React, { useState } from 'react';
import { updateItem } from './apiService';

function EditItemForm({ itemId, initialName, onItemUpdated }) {
  const [itemName, setItemName] = useState(initialName);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateItem(itemId, { name: itemName }).then(() => {
      onItemUpdated();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        required
      />
      <button type="submit">Update Item</button>
    </form>
  );
}

export default EditItemForm;