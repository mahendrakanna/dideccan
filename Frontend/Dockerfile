# Frontend/Dockerfile
FROM node:18-alpine as build

WORKDIR /app

# Install dependencies
COPY dist/package*.json ./
RUN npm install

# Build React app
COPY dist/ ./
RUN npm run build

# Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Copy nginx config for React routing + API proxy
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
