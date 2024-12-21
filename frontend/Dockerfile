# Stage 1: Build the React app
FROM node:18 AS build

WORKDIR /app

# Copy package.json and package-lock.json for installing dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the React application
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:latest

# Copy the build artifacts from the previous stage to Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
