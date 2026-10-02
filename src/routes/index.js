const { Router } = require('express');
const UserController = require('../controllers/UserController');
const ProductController = require('../controllers/ProductController');
const { Situation, ProductCategory, ProductSituation } = require('../models');

const routes = Router();

// Rotas de Usuários
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.get('/users/:id', UserController.show);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

// Rotas de Produtos
routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);

// Rotas para popular tabelas auxiliares
routes.post('/situations', async (req, res) => {
  try {
    const item = await Situation.create(req.body);
    return res.status(201).json(item);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

routes.post('/product-categories', async (req, res) => {
  try {
    const item = await ProductCategory.create(req.body);
    return res.status(201).json(item);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

routes.post('/product-situations', async (req, res) => {
  try {
    const item = await ProductSituation.create(req.body);
    return res.status(201).json(item);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

module.exports = routes;