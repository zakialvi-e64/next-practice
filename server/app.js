require("dotenv").config({ path: './server/.env' });
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);

})