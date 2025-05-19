// utils/fuzzyMatch.js
const stringSimilarity = require('string-similarity');

const findBestMatch = (dishName, foodList) => {
  const names = foodList.map(food => food.description);
  const { bestMatchIndex } = stringSimilarity.findBestMatch(dishName, names);

  return foodList[bestMatchIndex];
};

module.exports = {
  findBestMatch
};
