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
```

2. **Install Dependencies**
```bash
npm install
```

3. **Configure Environment Variables**
```bash
PORT=3000
MONGODB_URI=your_mongodb_connection_string
USDA_API_KEY=your_usda_api_key
```

4. **Run the project:Development**
```bash
npm run dev
```

5. **Run the project:Production**
```bash
npm start
```


## 📦 API Endpoints

1. **POST /api/get-calories**
-Request
```bash
{
  "dish_name": "chicken biryani",
  "servings": 2
}
```
```bash
-Respose
{
  "dish_name": "chicken biryani",
  "servings": 2,
  "calories_per_serving": 280,
  "total_calories": 560,
  "source": "USDA FoodData Central"
}
```
2. **POST /api/auth/register**
-Request
```bash
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@example.com",
  "password": "securePass123"
}
```
-Response
```bash
{
  "message": "User registered successfully"
}
```

## 🌐 Frontend
Visit http://localhost:3000 for a simple HTML form to use the calorie API.