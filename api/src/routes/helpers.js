require('dotenv').config();

const { API_KEY } = process.env;

const data = [
    {
        name: 'Gluten Free'
    },
    {
        name: 'Ketogenic'
    },
    {
        name: 'Vegetarian'
    },
    {
        name: 'Lacto - Vegetarian'
    },
    {
        name: 'Ovo - Vegetarian'
    },
    {
        name: 'Vegan'
    },
    {
        name: 'Pescetarian'
    },
    {
        name: 'Paleo'
    },
    {
        name: 'Primal'
    },
    {
        name: 'Low FODMAP'
    },
    {
        name: 'Whole30'
    }
]

module.exports = {
    urls: `https://api.spoonacular.com/recipes/complexSearch?${API_KEY}&addRecipeInformation=true`,
    dietUrl: 'link',
    data,
}