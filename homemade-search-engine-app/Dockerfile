# Development build
FROM node:16.17.1 as development
# Going to app directory of container
WORKDIR /app
# Copying files in app directory
COPY package.json .
# Installing all dependencies
RUN npm install
# Copying sources
COPY . .

# Production build
FROM node:16.17.1 as production
# Going to app directory of container
WORKDIR /app
# Copying files in app directory
COPY package.json tsconfig.json ./
# Installing serve to be able to launch our React webapps
RUN npm i -g serve
# Installing only prod dependencies
RUN npm install --omit=dev
# Copying sources
COPY . .
# Deleting .env file
RUN rm -rf ./.env*
# Building apps
RUN npm run build
# Starting apps
CMD [ "serve", "-s", "build" ]

