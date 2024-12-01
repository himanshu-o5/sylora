let how_much_places = 500;
let how_much_users = 50;

const usersArray = require('./users')
const placesArray = require("./places");

how_much_places = Math.min(how_much_places, placesArray.length);
how_much_users = Math.min(how_much_users, usersArray.length);

const User = require('../models/Users');
const Place = require('../models/Places');

const mongoose = require('mongoose');
require('dotenv').config({path: '../.env'});

const connectToMongo = async () => {
    await mongoose.connect(process.env.MONGO_URL)
    
}

connectToMongo()
.then(() => {
    console.log("Connected with MongoDB sucessfully");
})
.catch((e) => {
    console.log(e);
})  






const seedDB = async () => {
    await User.deleteMany({});
    await Place.deleteMany({});

    for(let it=0; it<how_much_users; it++){
        console.log(usersArray[it]);
        const user = new User({
            id: usersArray[it].id,
            name: usersArray[it].name,
            email: usersArray[it].email,
            age: usersArray[it].age,
            country: usersArray[it].country
        })
        await user.save();
    }


    for(let it=0; it<how_much_places; it++){
        console.log(placesArray[it]);
        // Get random number
        const randomNumber = Math.floor(Math.random() * how_much_users) + 1;
        // Check if user already exists
        let user = await User.findOne({id: randomNumber});

        // Get its _id
        const userId = user._id;

        // Add new place
        const newPlace = new Place({
            city: placesArray[it].city,
            state: placesArray[it].state,
            population: placesArray[it].population,
            author: userId
        })
        await newPlace.save();
    }
}


seedDB()
.then(() => {
    console.log("SUCCESS");
    process.exit();
})
.catch((e) => {console.log(e)});

