# Fetching the latest node image on alpine linux
FROM node:18-alpine


# Setting up the work directory
WORKDIR /client

# Installing dependencies
COPY ./package.json /client
RUN npm install

# Copying all the files in our project
COPY ./client .

# Starting our application
CMD npm RUN

CMD npm start