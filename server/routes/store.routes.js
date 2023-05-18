const StoreController = require('../controllers/store.controller')

module.exports = (app) => {
    app.post('/api/stores/new', StoreController.createStore)

    app.get('/api/stores', StoreController.allStores)

    app.get('/api/stores/:id', StoreController.getStore)

    app.put('/api/stores/update/:id', StoreController.updateStore)

    app.delete('/api/stores/delete/:id', StoreController.deleteStore)
}