const booksRepository = require('../repository/booksrepository');
const { getAll } = require('../repository/booksrepository');
const booksrepository = require('../repository/booksrepository');

module.exports = {
    async create (req, res){
        const result= await booksRepository.create(req.body)
        return res.redirect('/')
    } ,
    async getAll (req, res) {
        const result= await booksrepository.getAll();
        return res.render('home',{
            result
        })
    }
    }