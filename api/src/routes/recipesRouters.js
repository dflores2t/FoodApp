const { Router } = require('express');

const { getRecipe, getRecipeById, createRecipe } = require('../controllers/recipesControllers')

const router = Router();

router.route('/').get(getRecipe).post(createRecipe);

router.get('/:id', getRecipeById);

module.exports = router;