FROM node:22-bookworm AS build
WORKDIR /app
COPY package.json ./
COPY src ./src

FROM nginx:1.27-alpine
COPY --from=build /app/src /usr/share/nginx/html
EXPOSE 80
