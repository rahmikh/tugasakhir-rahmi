const express = require('express');
const cors = require('cors');
require('dotenv').config();
const listRoutes = require('./src/routes/listRoutes');
const middlewareLogRequest = require('./src/middleware/log');

const app = express();
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(middlewareLogRequest);
app.use(express.json());

// app.use("/api", userRoutes);


app.use("/list", listRoutes);
app.get('/', (req, res) => {
    res.json({ status: 'OK', app: 'List API' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
  