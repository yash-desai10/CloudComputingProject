FROM node:10.15.3
RUN npm install sails -g
ENV NODE_ENV development
WORKDIR /usr/src/app
COPY ["package.json","package-lock.json*","npm-shrinkwrap.json*","./"]
RUN npm install
COPY . .
EXPOSE 1337
CMD sails lift