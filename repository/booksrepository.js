const db = require('../models');

module.exports = {
    async getAll () {
        try {
            const books = await db.books.find().toArray();
            console.log(books)
            return books
        } catch (err) {
            throw new Error(`Database Error - ${err.message}`);
        }
    },
    async show (name) {
        const user = await db.Users.findOne({ userName: name });
        if (!user) throw new Error('Non-existance');
        return user;
    },
    async create (book) {
        try {
            const { insertedCount } = await db.books.insertOne(book);
            if (!insertedCount) throw new Error('insertion failure');
            return true;
        } catch (err) {
            throw new Error(`Due to ${err.message}, you are not allowed to add this book ${JSON.stringify(book)}`);
        }
        
    }}