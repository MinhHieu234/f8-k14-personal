# node js??? npm ???
#version ????
FROM node:24-alpine3.21

#make new folder
WORKDIR /app/web
#code
#coppy from(folder of your pc ) to (folder of docker)
COPY . /app/web
# init projcet , we have to have code
# install lib
RUN npm i
# run app
CMD npm run dev