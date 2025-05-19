// controllers/calorieController.js
const { fetchCaloriesFromUSDA } = require('../services/usdaService');

const getCalories = async (req, res, next) => {
  try {
    const { dish_name, servings } = req.body;

    if (!dish_name || typeof dish_name !== 'string') {
      const error = new Error('Invalid or missing dish_name');
      error.statusCode = 400;
      throw error;
    }

    if (!servings || typeof servings !== 'number' || servings <= 0) {
      const error = new Error('Invalid servings — must be a number > 0');
      error.statusCode = 400;
      throw error;
    }

    const result = await fetchCaloriesFromUSDA(dish_name);

    if (!result) {
      const error = new Error('Dish not found in USDA database');
      error.statusCode = 404;
      throw error;
    }

    const totalCalories = result.caloriesPerServing * servings;

    return res.json({
      dish_name,
      servings,
      calories_per_serving: result.caloriesPerServing,
      total_calories: totalCalories,
      source: 'USDA FoodData Central'
    });
  } catch (err) {
    next(err); // delegate to global error handler
  }
};

module.exports = {
  getCalories
};
