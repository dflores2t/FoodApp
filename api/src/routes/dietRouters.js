const { Router } = require('express');
const getDiets = require('../controllers/dietsControllers');

const router = Router();

router.get('/', getDiets);

module.exports = router;
