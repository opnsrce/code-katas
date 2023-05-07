
FROM node:lts

RUN mkdir /app

WORKDIR /app

RUN apt-get update

COPY . /app

RUN npm i