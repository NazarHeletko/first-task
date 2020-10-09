FROM node:10

# set working directory
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# add application folder
COPY . .

# install dep.
RUN npm i
RUN npm install -g serve
RUN npm run build

EXPOSE 5000

# start app
CMD ["serve", "-s", "build/"]
