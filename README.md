# 🍽️ Meal Calorie Count API (Node.js + Express + MongoDB)

This backend service allows users to input a dish name and number of servings, and get the estimated total calorie count using USDA FoodData Central API.

---

## 🚀 Features

- 🔍 Search for dish calories with fuzzy matching
- 🧮 Calculates calories per serving and total calories
- 🔒 User registration with password encryption
- 🚀 Fast in-memory caching for repeated queries
- ⚠️ Rate limiting to prevent abuse
- 🌐 Simple HTML frontend (static form)

---

## 🧱 Tech Stack

- Node.js + Express.js
- MongoDB with Mongoose
- USDA FoodData Central API
- bcryptjs, express-validator, node-cache
- Optional: Frontend in static HTML + JS

---

## 📦 Installation

1. **Clone the Repository**

```bash
git clone https://github.com/yourusername/meal-calorie-api.git
cd meal-calorie-api
