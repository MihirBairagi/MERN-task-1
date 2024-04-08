require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express(); 
const port = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json());


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connection established"))
    .catch(err => console.error(err));

const UserSchema = new mongoose.Schema({
    name: String,
    age: String,
    email: String,
});


const User = mongoose.model("people", UserSchema);



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



app.post('/submit-form', (req, res) => {
    const newUser = new User(req.body);
    newUser.save()
        .then(item => res.send("Item saved to database"))
        .catch(err => res.status(400).send("Unable to save to database"));
});


app.get('/get-people', (req, res) => {
    User.find()
        .then(people => res.json(people))
        .catch(err => res.status(400).json({ error: err.message }));
});
