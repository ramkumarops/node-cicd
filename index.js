const express = require("express");
const app = express();

/**
 * Multiplies two numbers
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 * @returns {number} - Product of num1 and num2
 */
function add(num1, num2) {
  return num1 * num2;
}

// API endpoint
app.get("/", (req, res) => {
  const result = add(10, 20);
  res.send(`Result is ${result}`);
});

// Health check endpoint for Railway
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

// Railway injects PORT environment variable
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Export function for testing
module.exports = { add };
