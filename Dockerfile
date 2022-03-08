FROM nikolaik/python-nodejs:python3.9-nodejs16

WORKDIR /app

COPY package.json .

RUN npm install
RUN apk update
RUN apk add
RUN apk add ffmpeg

COPY . .

CMD ["node", "app.js"]
