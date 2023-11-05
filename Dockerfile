FROM node:20-alpine
COPY ./ /app
WORKDIR /app
RUN corepack enable
RUN pnpm install
RUN pnpm run build

FROM node:20-alpine
RUN mkdir /app
COPY --from=0 /app/.output /app
CMD [ "node", "/app/server/index.mjs" ]
EXPOSE 3000
