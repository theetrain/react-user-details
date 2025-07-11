FROM node:22.17.0-alpine3.22

WORKDIR /srv/app

COPY . .

RUN npm cache clean --force
RUN npm install
RUN npm run build
