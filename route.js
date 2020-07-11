const booksController = require('./controller/bookscontroller');

module.exports  = (app) => {
    app.get('/', booksController.getAll);
    app.get('/newbook', (req, res) => {res.render('new.ejs') });
    app.post('/newbook', booksController.create)
    app.get('/newbook:/id', (req, res) => {res.render('show.ejs')});
    // app.get('/newbook/:indexOfbooksrepository', (req, res) => 
    // res.send(newbook[req.params]));
}
