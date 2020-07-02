const booksController = require('./controller/bookscontroller');

module.exports  = (app) => {
    app.get('/', booksController.getAll);
    app.get('/newbook', (req, res) => {res.render('new.ejs') });
    app.post('/', booksController.create)
}
