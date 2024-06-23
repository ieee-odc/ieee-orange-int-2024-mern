import React from 'react';
import { deleteItem } from './services/apiService';

function DeleteButton({ itemId, onItemDeleted }) {
  const handleDelete = () => {
    deleteItem(itemId).then(() => {
      onItemDeleted();
    });
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
}

export default DeleteButton;