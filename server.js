require('console-polyfill')
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')

const app = express();
connectDB()
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('OK👌')
})

//Define routes
app.use('/api/final', require('./routes/api/final'))
app.use('/api/prod', require('./routes/api/production'))
app.use('/api/sub', require('./routes/api/subassembly'))
app.use('/api/paint', require('./routes/api/paint'))


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})