const { Router } = require('express');
const { getUsers,createUsers,deleteUser } = require('../controllers/user.controller');
const router = Router();

router.route('/')
    .get(getUsers)
    .post(createUsers)
    

router.route('/:id')
    .delete(deleteUser);

module.exports = router;