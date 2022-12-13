FROM node:lts

RUN mkdir -p /app
WORKDIR /app

RUN npm install npm@latest -g

COPY ./project/package.json ./
RUN npm install

COPY ./project /app

RUN npm run build

RUN groupmod -g 1001 node
RUN usermod -u 1001 -g 1001 node
RUN chown -R node /app/node_modules/ /app/.next/

USER node
EXPOSE 3000