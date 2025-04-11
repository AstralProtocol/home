FROM node:18-alpine

WORKDIR /app

# Set environment variables for memory management
ENV NODE_OPTIONS="--max-old-space-size=4096"
ENV GATSBY_CPU_COUNT="1"
ENV GATSBY_CONCURRENT_DOWNLOAD="5"
ENV GATSBY_QUERY_ON_DEMAND="true"
ENV GATSBY_QUERY_ON_DEMAND_LOADING_INDICATOR="true"
ENV GATSBY_FORCE_PRESET_DEPENDENCY_OPTIMIZATIONS="true"
ENV NODE_ENV="development"

# Install build dependencies for node-gyp
RUN apk add --no-cache python3 make g++ 

# Install dependencies first (for better caching)
COPY package.json package-lock.json ./
RUN npm ci && npm cache clean --force

# Copy the rest of the application
COPY . .

# Expose the development port
EXPOSE 8001

# Start the development server with minimal memory usage
CMD ["npm", "run", "develop", "--", "-H", "0.0.0.0", "-p", "8001"] 