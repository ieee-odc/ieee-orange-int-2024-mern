// Route to check if the database is connected
app.get('/api/check-db-connection', (req, res) => {
    // Get a connection from the pool
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error getting connection from pool:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
  
      // Attempt a simple query to check the database connection
      connection.query('SELECT 1', (err, results) => {
        // Release the connection back to the pool
        connection.release();
  
        if (err) {
          console.error('Error querying database:', err);
          res.status(500).json({ error: 'Database Connection Error' });
          return;
        }
  
        // If the query is successful, send a success response
        res.json({ message: 'Database is connected' });
      });
    });
  });
  