const booksRepository = require('../repository/booksrepository');
const { getAll, findByID } = require('../repository/booksrepository');
const booksrepository = require('../repository/booksrepository');
const { ObjectId } = require('mongodb');

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
        let id = req.params.id;
        await booksRepository.findByID(id)
        // let result=await booksRepository.find({_id: ObjectId('')})
        // console.log(id)
        // res.render('edit', {
        //     result
        // })
    }
}
