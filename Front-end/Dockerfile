FROM node:18-alpine

WORKDIR /img_frontend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
