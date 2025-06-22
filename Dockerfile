FROM node:16 as builder
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:1.25
COPY config/default.conf.template /etc/nginx/templates/default.conf.template
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 9000
CMD ["nginx", "-g", "daemon off;"]
