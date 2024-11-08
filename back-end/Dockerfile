FROM node:18-alpine

WORKDIR /back-end-linkup

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
