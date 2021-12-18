import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import route from './routes/routes.js';

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/usuarios', route);

const PORT = 8000;
const URL = 'mongodb+srv://admin:admin@example.mdoyi.mongodb.net/example?retryWrites=true&w=majority';

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology:true }).then(() => {

    app.listen(PORT, () => {
        console.log(`server is running successfull on port ${PORT}`);
    });
}).catch(error => {
    console.log(`Error: `, error.message);
})