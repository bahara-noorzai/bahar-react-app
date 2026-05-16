# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci                    # ci is faster and stricter than install
COPY . .
RUN npm run build             # outputs to /app/dist

# Stage 2: Serve with nginx
FROM nginx:alpine AS production

# Copy built files to nginx's serve directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]