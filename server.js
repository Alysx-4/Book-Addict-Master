// DEPENDENCIES
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// MONGODB
const db = require('./models/index');
db.connect().then(() => app.emit('ready'));

// ///// Middleware //////
app.set('view engine', 'ejs');
app.use(express.static('public'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));;
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use((req, res, next) => {
  console.log('I run for all routes');
  next();
});

// ROUTES
require('./route')(app);

// LISTEN
app.listen(port, () => {
  console.log(`app listening on port: ${port}`)
});