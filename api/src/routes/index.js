const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipesRouters = require('./recipesRouters');
const dietRouters = require('./dietRouters');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/recipes', recipesRouters);
router.use('/diets', dietRouters);

module.exports = router;
