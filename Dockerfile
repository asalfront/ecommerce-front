FROM node:18.13.0
WORKDIR /app
COPY package.json .
RUN yarn install --network-timeout 1000000
COPY . .
CMD ["yarn", "dev"]
