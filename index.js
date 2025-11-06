const express = require("express");
const app = express();

function add(num1, num2) {
  return num1 * num2;
}

app.get("/", (req, res) => {
  const result = add(10, 20);
  res.send(`Result is ${result}`);
});

// 👇 Railway injects PORT environment variable
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
