# Use official Node.js runtime as base image
FROM node:20-alpine

# Set working directory in container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
# This is done separately to leverage Docker cache layers
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port (adjust if your app uses a different port)
EXPOSE 3000

# Define environment variable
ENV NODE_ENV=production

# Run tests during build (optional - remove if not needed)
RUN npm test

# Command to run the application
CMD ["node", "index.js"]

