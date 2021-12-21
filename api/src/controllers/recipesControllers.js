const { Recipe, Diet } = require('../db');
const axios  = require('axios');
const { urls } = require('../routes/helpers');
const res = require('express/lib/response');
const db = require('../db');

const getRecipe = async (req, res, next) => {
    const { title } = req.query;
    if (title) {
        // return res.send('obtener receta por nombre');
        let apiRecipe = await axios.gen(urls);
        apiRecipe = apiRecipe.data.results;

        const dbRecipe = await Recipe.findAll({
            where: {
                name: {
                    [Op.iLike]:'%' + title + '%'
                },
            },
            include: {
                model:Diet,
            },
        })
       return res.json([...dbRecipe, ...apiRecipe])
    } else {
        let apiRecipe = await axios.get(urls);
        apiRecipe = apiRecipe.data.results;
        const dbRecipe = await Recipe.findAll({
            include: {
                model:Diet,
            }
        })
       return res.json([...dbRecipe,...apiRecipe])
    }
    // return res.send('obtener todas las recetas');
}

const getRecipeById = async (req, res, next) => {
    const { id } = req.params;
    const regex = /(\w+\-){4}\w+/g;  //validar si es codigo uui
    let recipe = null;

    try {
        if (regex.test(id)) {
            recipe = await Recipe.findByPk(id, {
                include: {
                    model: Diet
                }
            });
            recipe = {
                id: recipe.id,
                title: recipe.title,
                summary: recipe.summary,
                spoonacularScore: recipe.spoonacularScore,
                healthScore: recipe.healthScore,
                step: recipe.step,
                diet: recipe.diet.map(element =>{return {name:element.diet}} )
            }
        } else {
            let recipeResponse = await axios.get(urlsId)
            recipeResponse = recipeResponse.data;

            
        }
    } catch (e) {
        next(e)
    }
    // res.send('obtener receta por id');
}

//CREACION DE RECETA-POST
const createRecipe = (req, res, nex) => {
    const { title, summary, spoonacularScore, healthScore, step, name } = req.body;

    Recipe.create({
        title, summary, spoonacularScore, healthScore, step
    }).then((newRecipe) => {
        newRecipe.setDiet(name).then(() => {
            res.json(newRecipe);
        });
    })
        .catch((error) => {
            next(error);
        })
}

module.exports = {
    getRecipe, getRecipeById, createRecipe
}