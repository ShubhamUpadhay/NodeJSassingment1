const mongoose = require('mongoose')
const express = require('express')
const PORT = process.env.PORT || 8000;
const { default: axios } = require('axios')
const cors = require("cors")
require('dotenv').config()
const app = express()
app.use(cors())
const dbURI = `mongodb+srv://Shubham:Shubham@cluster0.lyt4w.mongodb.net/Team?retryWrites=true&w=majority`
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}
mongoose.connect(dbURI, options).then(() => {
    console.log('Database Connection done!!!')
})

const playerSchema = new mongoose.Schema({}, { strict: false })
var team = mongoose.model('team', playerSchema)

app.delete('/delcsk', async (req, res) => {
    data = await team.deleteMany({})
    res.send(data)
})


let no;
app.get('/cskget', async (req, res) => {
    var data2 = await team.find()
    console.log(data2.length)
    no = data2.length
    res.send(data2)
})


app.post('/cskpost', async (req, res) => {
    var data = await team.insertMany([
        {
            name: "Mahendra Singh Dhoni",
            photo: "https://static.iplt20.com/players/210/1.png",
            team: "Chennai Super Kings",
            price: "Rs. 70 Million",
            playingStatus: "Playing",
            Role: "Batsman",
            logo: "https://www.searchpng.com/wp-content/uploads/2019/02/Chennai-Super-Kings-Logo-PNG-Image-.png"
        },
        {
            name: "Moin Ali",
            photo: "https://static.iplt20.com/players/210/1735.png",
            team: "Chennai Super Kings",
            price: "RS 50 Million",
            playingStatus: "Playing",
            Role: "Batsman",
            logo: "https://www.searchpng.com/wp-content/uploads/2019/02/Chennai-Super-Kings-Logo-PNG-Image-.png"
        },
        {
            name: "Suresh Raina",
            photo: "https://static.iplt20.com/players/210/14.png",
            team: "Chennai Super Kings",
            price: "RS 20 Million",
            playingStatus: "Playing",
            Role: "Batsman",
            logo: "https://www.searchpng.com/wp-content/uploads/2019/02/Chennai-Super-Kings-Logo-PNG-Image-.png"
        },
        {
            name: "Ruturaj Gaikwad",
            photo: "https://static.iplt20.com/players/210/5443.png",
            team: "Chennai Super Kings",
            price: "RS 8 Million",
            playingStatus: "Playing",
            Role: "Batsman",
            logo: "https://www.searchpng.com/wp-content/uploads/2019/02/Chennai-Super-Kings-Logo-PNG-Image-.png"
        },
        {
            name: "Faf du Plessis",
            photo: "https://static.iplt20.com/players/210/24.png",
            team: "Chennai Super Kings",
            price: "RS 5 Million",
            playingStatus: "Playing",
            Role: "Batsman",
            logo: "https://www.searchpng.com/wp-content/uploads/2019/02/Chennai-Super-Kings-Logo-PNG-Image-.png"
        },
        {
            name: "Dwayne Bravo",
            photo: "https://static.iplt20.com/players/210/25.png",
            team: "Chennai Super Kings",
            price: "RS 2.5 Million",
            playingStatus: "Playing",
            Role: "All-Rounder",
            logo: "https://www.searchpng.com/wp-content/uploads/2019/02/Chennai-Super-Kings-Logo-PNG-Image-.png"
        },
        {
            name: "Ravindra Jadeja",
            photo: "https://static.iplt20.com/players/210/9.png",
            team: "Chennai Super Kings",
            price: "RS 1.2 Million",
            playingStatus: "Playing",
            Role: "All-Rounder",
            logo: "https://www.searchpng.com/wp-content/uploads/2019/02/Chennai-Super-Kings-Logo-PNG-Image-.png"
        },
        {
            name: "Krishnaappa Gowtham",
            photo: "https://static.iplt20.com/players/210/3834.png",
            team: "Chennai Super Kings",
            price: "RS 1.1 Million",
            playingStatus: "Playing",
            Role: "All-Rounder",
            logo: "https://www.searchpng.com/wp-content/uploads/2019/02/Chennai-Super-Kings-Logo-PNG-Image-.png"
        },
        {
            name: "Shardhul Thakur",
            photo: "https://static.iplt20.com/players/210/1745.png",
            team: "Chennai Super Kings",
            price: "RS 1 Million",
            playingStatus: "Playing",
            Role: "Bowler",
            logo: "https://www.searchpng.com/wp-content/uploads/2019/02/Chennai-Super-Kings-Logo-PNG-Image-.png"
        },
        {
            name: "Deepak Chahar",
            photo: "https://static.iplt20.com/players/210/140.png",
            team: "Chennai Super Kings",
            price: "RS 0.9 Million",
            playingStatus: "Playing",
            Role: "Bowler",
            logo: "https://www.searchpng.com/wp-content/uploads/2019/02/Chennai-Super-Kings-Logo-PNG-Image-.png"
        },
        {
            name: "Sam Curran",
            photo: "https://static.iplt20.com/players/210/2939.png",
            team: "Chennai Super Kings",
            price: "RS 0.5 Million",
            playingStatus: "Playing",
            Role: "Bowler",
            logo: "https://www.searchpng.com/wp-content/uploads/2019/02/Chennai-Super-Kings-Logo-PNG-Image-.png"
        },
        {
            name: "Karn Sharma",
            photo: "https://static.iplt20.com/players/210/1118.png",
            team: "Chennai Super Kings",
            price: "RS 0.7 Million",
            playingStatus: "On-Bench",
            Role: "Bowler",
            logo: "https://www.searchpng.com/wp-content/uploads/2019/02/Chennai-Super-Kings-Logo-PNG-Image-.png"
        }
    ])
    res.send(data)
})


  
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}!!!!`)
})



