const Store = require('../models/store.model')

module.exports.createStore = (req, res) => {
    Store.create(req.body)
    .then((newStore) => res.json({results: newStore}))
    .catch(err => res.status(400).json(err))
}

module.exports.allStores = (req, res) => {
    Store.find()
    .then((stores) => res.json({results: stores}))
    .catch((err) => res.json(err))
}

module.exports.getStore = (req, res) => {
    Store.findById({_id: req.params.id})
    .then((store) => res.json({results: store}))
    .catch((err) => res.json(err))
}

module.exports.updateStore = (req, res) => {
    Store.findOneAndUpdate({_id: req.params.id}, req.body, { runValidators: true }, { new: true})
    .then((updatedStore) => res.json({results: updatedStore}))
    .catch(err => res.status(400).json(err))
}

module.exports.deleteStore = (req, res) => {
    Store.deleteOne({_id: req.params.id})
    .then((deletedStore) => res.json({results: deletedStore}))
    .catch((err) => res.json(err))
}