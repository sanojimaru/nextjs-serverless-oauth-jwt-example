FROM node:12-alpine

RUN apk add make automake gcc g++ python3

RUN mkdir /app
WORKDIR /app
COPY package.json ./
RUN yarn
