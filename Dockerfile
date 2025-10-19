# -----------------------
# 1️⃣ Build stage
# -----------------------
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies (no dev cache)
RUN npm ci

# Copy the remaining files
COPY . .

# Build the Vite app for production
RUN npm run build

# -----------------------
# 2️⃣ Production stage (Nginx)
# -----------------------
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy a minimal nginx config (optional but recommended)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
