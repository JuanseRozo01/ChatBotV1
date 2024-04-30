const express = require('express'); 
const ejs = require('ejs');
const app = express()
app.listen(8000);

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/index');
});
