const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const toDoRoutes = require('./routes/toDoRoutes');
const cors = require('cors');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,POST,PUT,DELETE',
  credentials: true,
}));

app.get('/', (req, res) => {
  res.send('API is running...');
});
app.use(toDoRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
