const path = require('path')
const express = require('express')
const app = express()
const connectDB = require('./config/db');

// Connect Database
connectDB();

// bodyparser Middleware
app.use(express.json({ extended: false }));




// prevent cors errors

app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

// Define Routes
app.use('/api/contacts', require('./routes/api/contacts'));
app.use('/api/orders', require('./routes/api/orders'));
app.use('/api/stripe', require('./routes/api/stripe'));
app.use('/api/nodemailer', require('./routes/api/nodemailer'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server running on port ${port}`)) 
