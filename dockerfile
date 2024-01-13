# Use an official Node.js runtime as the base image
FROM node:alpine

# Set the working directory in the container to /app
WORKDIR /front

# Bundle the app source inside the Docker image
COPY . .

# Install the dependencies in the container
RUN npm install


# Build the app for production
RUN npm run build

# Install `serve` to run the application
RUN npm install -g serve

# Make port 5000 available outside the container
EXPOSE 3000

# Serve the built application
CMD ["serve", "-s", "build", "-l", "3000"]
