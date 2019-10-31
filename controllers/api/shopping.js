const Shopping = require('../../models/shopping');

module.exports = {
    index,
    show,
    create,
    delete: deleteOne,
    update
};

async function index(req, res) {
    const shopping = await Shopping.find({});
    res.status(200).json(shopping);
}

async function show(req, res) {
    const shopping = await Shopping.findById(req.params.id);
    res.status(200).json(shopping);
}

async function create(req, res) {
    const shopping = await Shopping.create(req.body);
    res.status(201).json(shopping);
}

async function deleteOne(req, res) {
    const deletedShopping = await Shopping.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedShopping);
}

async function update(req, res) {
    const updatedShopping = await Shopping.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedShopping);
}