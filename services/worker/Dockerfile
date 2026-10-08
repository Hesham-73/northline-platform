FROM node:22-bookworm AS build
WORKDIR /app
COPY package.json ./
COPY src ./src

FROM node:22-bookworm-slim AS runtime
WORKDIR /app
COPY --from=build /app /app
CMD ["node", "src/main.ts"]
