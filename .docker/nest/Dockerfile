FROM node:14.16.1-alpine

WORKDIR /home/node/app
RUN npm install -g @nestjs/cli
CMD npm install && npm run build && npm run start:dev
EXPOSE 3000