# syntax=docker/dockerfile:1

FROM node:20.16.0-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

CMD npm start