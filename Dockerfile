FROM node:18

# Create app directory
WORKDIR /lyozha/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

#compiling
RUN npm run build

CMD [ "npm", "run", "start:dev" ]