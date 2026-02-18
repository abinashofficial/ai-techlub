# -----------------------
# 1️⃣ Build Stage (Node)
# -----------------------
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files first for caching
COPY package*.json ./

# Install dependencies (clean install)
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the production version of the app
RUN npm run build


# -----------------------
# 2️⃣ Production Stage (Nginx)
# -----------------------
FROM nginx:1.25-alpine

# Remove default Nginx config (optional, ensures no conflicts)
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom optimized server block
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy built static files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
