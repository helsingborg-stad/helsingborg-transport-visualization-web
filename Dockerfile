FROM node:18 as builder

WORKDIR /usr/src/app

COPY package*.json tsconfig*.json index.html vite.config.ts ./
COPY src ./src
COPY public ./public

ARG VITE_GOOGLE_MAPS_API_KEY
ENV VITE_GOOGLE_MAPS_API_KEY=${VITE_GOOGLE_MAPS_API_KEY}

ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

RUN npm install && npm run build

# Create minimal production image

FROM nginx:alpine

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80