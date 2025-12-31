const express = require('express');
const app = express();

// ثغرة أمنية متعمدة: وضع مفتاح سري مباشرة في الكود
const API_KEY = "AKIAIOSFODNN7EXAMPLE"; 

app.get('/', (req, res) => {
  res.send('Hello DevSecOps World!');
});

app.listen(3000, () => {
  console.log('App is running on port 3000');
});
