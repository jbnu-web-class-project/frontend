# STEP 1: Build Stage
FROM node:20-alpine AS builder

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install all dependencies (including dev dependencies)
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the React application
RUN npm run build


# STEP 2: Production Stage
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Set environment variable for production
ENV NODE_ENV=production

# Copy only the necessary files from the build stage
COPY --from=builder /usr/src/app/build ./build
COPY --from=builder /usr/src/app/package*.json ./

# Install only production dependencies
RUN npm install --only=production && \
    npm cache clean --force

# Expose the application port
EXPOSE 3000

# Start the server using a lightweight HTTP server
CMD ["npx", "serve", "-s", "build", "-l", "3000"]

