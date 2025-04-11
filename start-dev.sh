#!/bin/bash

# Set memory optimization environment variables
export NODE_OPTIONS="--max-old-space-size=4096"
export GATSBY_CPU_COUNT="1"
export GATSBY_CONCURRENT_DOWNLOAD="5"
export GATSBY_QUERY_ON_DEMAND="true"
export GATSBY_FORCE_PRESET_DEPENDENCY_OPTIMIZATIONS="true"

# Clear gatsby cache
echo "Clearing Gatsby cache..."
rm -rf .cache public

# Start Gatsby on port 8001
echo "Starting Gatsby on port 8001..."
npm run develop -- -p 8001 