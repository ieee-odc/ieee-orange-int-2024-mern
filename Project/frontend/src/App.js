import React from 'react';
import './App.css';
import AddItemForm from './components/AddItems';
import EditItemForm from './components/EditItems';
import ItemList from './components/ListItems';
import DeleteButton from './components/DeleteItems';

function App() {
  
  const handleEdit = (itemId, updatedItem) => {
    console.log(`Edit item ${itemId}`, updatedItem);
    
  };
  const handleDelete = (itemId) => {
    console.log(`Delete item ${itemId}`);
    
  };

  const handleEditItem = (itemId, updatedItem) => {
    
  };

  const handleDeleteItem = (itemId) => {
    
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Fancy App</h1>
      </header>
      <main className="App-content">
        <section className="Add-item-section">
          <h2>Add New Item</h2>
          <AddItemForm />
        </section>
        <section className="Item-list-section">
          <h2>Item List</h2>
          <ItemList onEdit={handleEdit} onDelete={handleDelete} />
        </section>
        <section className="Edit-item-section">
          <h2>Edit Item</h2>
          <EditItemForm onEditItem={handleEditItem} />
        </section>
        <section className="Delete-item-section">
          <h2>Delete Item</h2>
          <DeleteButton onDeleteItem={handleDeleteItem} />
        </section>
      </main>
    </div>
  );
}


export default App;