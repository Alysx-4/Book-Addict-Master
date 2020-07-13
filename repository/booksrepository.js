const db = require('../models');
const ObjectId = require('mongodb').ObjectId;
const mongoose = require('mongoose');

module.exports = {
    async getAll () {
        try {
            const books = await db.books.find().toArray();
            return books
        } catch (err) {
            throw new Error(`Database Error - ${err.message}`);
        }
    },
    async show (name) {
        const books = await db.books.findOne({ title: name });
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
    } ,
    async findByid (id) {
        try{
            console.log(id)
            let newid = ObjectId(id)
            console.log(newid)
            const books = await db.books.findById(id);
            console.log(books)
            return books
        }
     catch (err) {
        throw new Error(`Database Error - ${err.message}`);
    }   
}
} 