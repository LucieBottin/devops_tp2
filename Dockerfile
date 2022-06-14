FROM node:10-alpine

#RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
#WORKDIR /home/node/app
#COPY package*.json ./
#USER node
#RUN npm install
#COPY --chown=node:node . .
#EXPOSE 8090
#CMD [ "node", "api.js" ]

RUN apk add --no-cache --repository=http://dl-cdn.alpinelinux.org/alpine/v3.8/main/ nodejs=8.14.0-r0 npm 

COPY api.js .
COPY package*.json .

RUN npm install

EXPOSE 8081

ENTRYPOINT node api.js