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
# Starting server
RUN npm start

# Production build
FROM node:16.17.1 as production
# Putting an arg to say that it is a production image
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
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
# Checking for errors in code
RUN npm run lint 
# Building apps
RUN npm run build
# Starting apps
RUN serve -s build

