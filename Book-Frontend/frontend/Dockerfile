# Stage 1: Build the React application
FROM node:18 AS frontend-builder

# Set working directory
WORKDIR /app

# Copy the package.json and install dependencies
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

# Install dependencies
RUN npm install

# Copy the rest of the frontend files
COPY . /app

# Build the React app for production
RUN npm run build

# Stage 2: Serve the React app using Nginx
FROM nginx:alpine AS frontend

# Copy the build folder from the frontend-builder stage
COPY --from=frontend-builder /app/build /usr/share/nginx/html

# Expose the port
EXPOSE 80

# Start Nginx to serve the frontend
CMD ["nginx", "-g", "daemon off;"]
