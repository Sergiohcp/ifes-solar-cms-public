FROM node:16 as BASE

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn build

EXPOSE 1337

CMD [ "yarn", "start" ]