# Select base image
FROM node:12-alpine
# Setting environment 
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
# Copy package.json and install dependencies (For production - npm ci --only=productions)
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /app && cp -a /tmp/node_modules /app
# Copy app code
WORKDIR /app
ADD . /app
# Run the app
CMD [ "npm", "start" ]