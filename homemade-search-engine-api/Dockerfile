# Development building
FROM node:16.17.1 as development
# Going to app directory of container
WORKDIR /app
# Copying files in app directory
COPY package.json .
# Installing all dependencies
RUN npm install
# Copying sources
COPY . .

# Production building
FROM node:16.17.1 as production
# Going to app directory of container
WORKDIR /app
# Copying files needed for compilation in app directory
COPY package.json tsconfig.json ./
# Installing only prod dependencies
RUN npm install --omit=dev
# Copying sources
COPY . .
# Deleting .env file
RUN rm -rf ./.env*
# Building the server and starting it
CMD [ "npm","start" ]

