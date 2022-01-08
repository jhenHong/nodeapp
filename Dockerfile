FROM node:16

# Create app directory
WORKDIR /app

# Bundle app source
COPY /app

RUN npm install

EXPOSE 8080
CMD [ "node", "index.js" ]
