
# Use a specific version of Node as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the /app directory inside the container
COPY package.json /app
COPY package-lock.json /app

# Install dependencies using npm
RUN npm install

# Copy the rest of the files and directories to the /app directory inside the container
COPY . /app

# Expose port 3000 for the application
EXPOSE 3000

# Run the application using nodemon and app.js as the entry point
CMD ["nodemon", "app.js"]
