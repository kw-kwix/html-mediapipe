FROM node:latest as build
COPY package.json .
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:alpine
COPY --from=build /dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
