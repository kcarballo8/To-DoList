const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.get('/',(req, res) => {
    res.redirect(303, '/todo/list');
});

router.get('/list', controllers.goTodo);
router.post('/add', controllers.adding);

router.post('/save', controllers.saving);

router.post('/remove', controllers.removing);

module.exports = {router};

