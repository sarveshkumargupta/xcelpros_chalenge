// services/usdaService.js
const axios = require('axios');
const dotenv = require('dotenv');
const cache = require('../utils/cache');
const { findBestMatch } = require('../utils/fuzzyMatch');
dotenv.config();

const USDA_API_URL = 'https://api.nal.usda.gov/fdc/v1/foods/search';
const API_KEY = process.env.USDA_API_KEY;

const fetchCaloriesFromUSDA = async (dishName) => {
  const cacheKey = `calories:${dishName.toLowerCase()}`;

  // Return from cache if exists
  const cachedResult = cache.get(cacheKey);
  if (cachedResult) {
    console.log(`Cache hit for "${dishName}"`);
    return cachedResult;
  }

  try {
    const response = await axios.get(USDA_API_URL, {
      params: {
        query: dishName,
        api_key: API_KEY,
        pageSize: 10 // more options for fuzzy match
      }
    });

    const foods = response.data.foods;

    if (!foods || foods.length === 0) {
      return null;
    }

    // Fuzzy match the best item
    const bestMatch = findBestMatch(dishName, foods);
    const caloriesPerServing = bestMatch.foodNutrients?.find(n => n.nutrientName === 'Energy')?.value;

    const result = {
      description: bestMatch.description,
      caloriesPerServing: caloriesPerServing || 0
    };

    // Save to cache
    cache.set(cacheKey, result);
    console.log(`Cache set for "${dishName}"`);

    return result;
  } catch (error) {
    console.error('USDA API Error:', error.message);
    throw new Error('Failed to fetch calorie data from USDA');
  }
};

module.exports = {
  fetchCaloriesFromUSDA
};
