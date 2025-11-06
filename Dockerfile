# Use official Node.js runtime as base image
FROM node:20-alpine

# Set working directory in container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
# This is done separately to leverage Docker cache layers
COPY package*.json ./

# Install only production dependencies (faster and more secure than npm install)
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Change ownership of app directory to node user
RUN chown -R node:node /app

# Define environment variable
ENV NODE_ENV=production

# Expose port (for documentation and container networking)
EXPOSE 3000

# Run as non-root user for security
USER node

# Command to run the application
CMD ["node", "index.js"]

