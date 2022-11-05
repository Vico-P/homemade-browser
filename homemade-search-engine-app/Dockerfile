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
# Setting up REACT_APP_API_URL before starting building apps
# React can't retrieve at runtime env var because they are injected during build phase
# Two options for this to work, pass the api url delivered by mikikube after exposing api with external service and runnin minikube service <api_service> --url
# Other wise make an ingress object to get an URL but it's more complicated on minikube and better to use it on a cloud provider
# Check this link to understand the problem -> https://stackoverflow.com/questions/58184169/react-front-end-node-js-back-end-monogo-db-deployment-as-microservices-at-kube
ARG apiUrl
ENV REACT_APP_API_URL $apiUrl
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
# Env variable needs to be in .env so creating a good .env with appropriate values and starting apps
CMD serve -s build


