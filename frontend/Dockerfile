FROM node:15.11.0-alpine3.10 as build

WORKDIR /app/frontend
COPY . /app/frontend

RUN npm ci --only=prod --silent 
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/frontend/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]