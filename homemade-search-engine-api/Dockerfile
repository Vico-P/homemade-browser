# Development building
FROM node:16.17.1 as development
# Going to app directory of container
WORKDIR /app
# Copying files in app directory
COPY package.json .
# Installing all dependencies
RUN npm install
# TODO Refactor to not make a move of .env.example to a .env file
ADD ./.env.example ./.env
# Copying sources
COPY . .

# Production building
FROM node:16.17.1 as production
# Putting an arg to say that it is a production image
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
# Going to app directory of container
WORKDIR /app
# Copying files needed for compilation in app directory
COPY package.json tsconfig.json ./
# Installing only prod dependencies
RUN npm install --omit=dev
# Copying sources
COPY . .
# TODO Refactor to not make a move of .env.example to a .env file
RUN mv .env.example .env
# Checking for errors in code
RUN npm run lint 
# Building the server and starting it
RUN npm start

