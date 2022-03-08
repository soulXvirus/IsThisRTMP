FROM nikolaik/python-nodejs:python3.9-nodejs16

WORKDIR /app

COPY package.json .

RUN npm install
RUN apt update && apt upgrade -y
RUN apt install ffmpeg -y

COPY . .

CMD ["node", "app.js"]
