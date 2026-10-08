FROM node:22-bookworm AS deps
WORKDIR /app
COPY package.json ./

FROM node:22-bookworm AS build
WORKDIR /app
COPY --from=deps /app/package.json ./
COPY src ./src

FROM node:22-bookworm-slim AS runtime
WORKDIR /app
COPY --from=build /app /app
ENV PORT=8080
EXPOSE 8080
CMD ["node", "src/server.ts"]
