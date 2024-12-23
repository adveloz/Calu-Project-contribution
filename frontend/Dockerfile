# Stage 1: Build the React app
FROM node:18

WORKDIR /app

# Copy package.json and package-lock.json for installing dependencies
COPY package*.json ./
RUN npm install --fetch-timeout=60000 --global-style

# Copy the rest of your application code
COPY . .

# Build the React application
RUN npm run build --verbose

# Make entrypoint script executable
# RUN chmod +x /app/entrypoint.sh

# Set the entrypoint
# ENTRYPOINT ["/app/entrypoint.sh"]

# Keep container running
CMD tail -f /dev/null
