#!/bin/sh

# Create assets directory in the build directory
mkdir -p /app/build/static/media/assets

# Set permissions
chmod 777 /app/build/static/media/assets

# Start nginx
nginx -g 'daemon off;'
