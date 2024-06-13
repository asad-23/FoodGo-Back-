const express = require('express')
const mongo  = require('./DB_connect.js')
const router = require('./routes/userRouter.js')

require('dotenv').config()

 

mongo() // Connecting to MongoDB

const port = process.env.PORT
const app = express()
app.use(express.json())



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL);
    res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
    next();
})

app.use('/api', router)
app.use('/api', require('./routes/displayRoute.js'))
app.use('/api', require('./routes/orderDataRouter.js'))





app.listen(port, () => console.log(`Server running on port ${port}`))