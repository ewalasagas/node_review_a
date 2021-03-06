const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>HELLO</h1>');
});

app.get('/help', (req, res) => {
    res.send({
        name: 'Andrew',
        age: 27
    })
})

app.get('/about', (req, res) => {
    res.send('<h1>WEATHER</h1>');
})

app.get('/weather', (req, res) => {
    res.send({
        name: 'Andrew',
        age: 27
    })
})

// app.com
// app.com/help
// app/com/about

app.listen(3000, () =>{
    console.log('Server is up on port 3000')
})