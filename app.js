const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Middleware for serving static files
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the Nirvagni folder
app.use('/nirvagni', express.static(path.join(__dirname, 'Nirvagni')));

// Routes
app.get('/', (req, res) => {
    res.render('landing');
});

app.get('/index', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact',(req,res) => {
    res.render('contact');
});

app.get('/features', (req, res) => {
    res.render('features');
});

app.get('/team', (req, res) => {
    res.render('team');
});

app.get('/technology', (req, res) => {
    res.render('technology');
});

app.get('/deployment', (req, res) => {
    res.render('deployment');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
