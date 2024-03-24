FROM node:alpine
WORKDIR /src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4202
CMD /src/app/node_modules/.bin/ng serve --host 0.0.0.0 --port 4202 --disable-host-check
