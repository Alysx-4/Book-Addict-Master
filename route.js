const booksController = require('./controller/bookscontroller');
const booksrepository = require('./repository/booksrepository');
const bookscontroller = require('./controller/bookscontroller');

module.exports  = (app) => {
    app.get('/', booksController.getAll);
    app.get('/newbook', bookscontroller.createbook);
    app.post('/newbook', booksController.create);
    app.get('/editbook/:id', booksController.edit);
    app.put('/update',bookscontroller.update);
        // })
    //app.get('/newbook:/id', (req, res) => {res.render('show.ejs')});
    // app.get('/newbook/:indexOfbooksrepository', (req, res) => 
    // res.send(newbook[req.params]));
}
