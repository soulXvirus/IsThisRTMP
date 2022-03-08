FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install
RUN apk update
RUN apk add
RUN apk add ffmpeg

COPY . .

CMD ["node", "app.js"]
