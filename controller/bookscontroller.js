const booksRepository = require('../repository/booksrepository');
const { getAll, findByID } = require('../repository/booksrepository');
const booksrepository = require('../repository/booksrepository');
const { Db } = require('mongodb');
const ObjectId = require('mongodb').ObjectID;

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
    } , 
    createbook(req, res) {
        res.render('new')
    } ,
    async edit(req, res) {
        const id = req.params.id;
        const result = await booksRepository.findByID(id)
        return  res.render('edit', {
            result
        })
    } ,     
    async update(req, res) {
        const id = req.params.id;
        const result = await booksRepository.updateBook(id, req.body)
        res.redirect('/');
    } , 
    async delete(req, res) {
        const id = req.params.id;
        const result = await booksRepository.deleteBook(id)
        res.redirect('/');
    }
}
