FROM node:14.16.1-alpine

USER node

RUN mkdir /home/node/.npm-global
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

ENV HOME=/home/node

WORKDIR /home/node/app

RUN npm install -g @angular/cli

CMD npm install && ng build && ng serve
EXPOSE 4200

CMD [ "node" ]