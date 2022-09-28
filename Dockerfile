FROM node:16.17.0-alpine
WORKDIR /opt/app
COPY . .
RUN apk add git && corepack enable && pnpm i && pnpm run docs:build
CMD pnpm run docs:serve