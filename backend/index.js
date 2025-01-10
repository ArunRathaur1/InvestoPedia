const connect= require('./db');
const express = require('express')
const cors=require('cors');
require('dotenv').config();
const port=process.env.PORT;
connect();
const app = express()
app.use(express.json());
app.use(cors());
app.use('/notes',require('./routes/notes'));
 app.use('/auth',require('./routes/auth'));
 app.use('/admin',require('./routes/admincontrol'));
 app.use('/Strategies',require('./routes/Strategies'));

app.listen(port, () => {
})