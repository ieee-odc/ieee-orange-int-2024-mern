const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
const itemRoutes = require('./src/routes/itemRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api', itemRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
