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

//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})
