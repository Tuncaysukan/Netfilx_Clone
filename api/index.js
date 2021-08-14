const express = require('express');
const app = express();
const dotenv = require('dotenv');
const PORT = process.env.PORT||8800
const autRouter = require('./routes/auth');
dotenv.config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {console.log('DB tamam ' + PORT)}
).catch((error) => {console.error(error.message);});
app.use(express.json());
app.use('/api/auth', autRouter);



app.listen(PORT, () => {
    console.log('Api  Çalışıyor ' + PORT);
})

