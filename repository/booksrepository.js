const db = require('../models');
const ObjectId = require('mongodb').ObjectID;
const mongoose = require('mongoose');
const { ObjectID } = require('mongodb');
const { query } = require('express');

module.exports = {
    async getAll() {
        try {
            const books = await db.books.find().toArray();
            return books
        } catch (err) {
            throw new Error(`Database Error - ${err.message}`);
        }
    },
    async show(name) {
        const books = await db.books.findOne({ title: name });
        if (!user) throw new Error('Non-existance');
        return user;
    },
    async create(book) {
        try {
            const { insertedCount } = await db.books.insertOne(book);
            if (!insertedCount) throw new Error('insertion failure');
            return true;
        } catch (err) {
            throw new Error(`Due to ${err.message}, you are not allowed to add this book ${JSON.stringify(book)}`);
        }
    },
    async findByID(stringId) {
        try {
            let id = new ObjectID(stringId)
            const book = await db.books.findOne({ _id: id });
            return book
        }
        catch (err) {
            throw new Error(`Database Error - ${err.message}`);
        }
    },
    async updateBook(id, body) {
        try {
            db.books.update(
                { _id: new ObjectID(id) },
                {
                    $set: {
                        title: body.title,
                        description: body.description,
                        url: body.url
                    }
                }) 
        } catch (err) {
            throw new Error(`Database Error - ${err.message}`);
        }
    },
    async deleteBook (id) {
        try {
            db.books.deleteOne({ _id: new ObjectID(id) });

        } catch (err) {
            throw new Error(`Database Error - ${err.message}`);
        }
    } 
} 