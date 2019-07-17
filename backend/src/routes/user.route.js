const { Router } = require('express');
const { getUsers } = require('../controllers/user.controller');
const router = Router();

router.route('/')
    .get(getUsers);


module.exports = router;