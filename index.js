const express = require('express');
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

//get data form json file
const categories = require('./data/categoris.json');
const news = require('./data/news.json')

//cors is a middleware function using cors to providing data server side to client side 
app.use(cors())

//check the server is running 
app.get('/', (req, res) => {
    res.send('dragon is running')
});

//get all categories 
app.get('/categories', (req, res) => {
    res.send(categories);
})



// get all news 
app.get('/news', (req, res) => {
    res.send(news)
})

// get one specific data using by id
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id)
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
})

// get categories news 
app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id);       //parseInt() using convert id string to number
    // 0 id showing all news 
    if (id === 0) {
        res.send(news)
    }
    else {
        const categoryNews = news.filter(n => parseInt(n.category_id) === id);
        res.send(categoryNews)
    }
})







app.listen(port, () => {
    console.log(`Dragon port is running on: ${5000}`)
})