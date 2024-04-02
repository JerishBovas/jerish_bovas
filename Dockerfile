FROM node:20-alpine

WORKDIR /jerish_bovas_docker/

COPY public/ /jerish_bovas_docker/public
COPY src/ /jerish_bovas_docker/src
COPY package.json /jerish_bovas_docker/

RUN npm install

CMD [ "npm", "start" ]