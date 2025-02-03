FROM nginx

COPY ./html /usr/share/nginx/html
COPY ./html/nginx.conf /etc/nginx/conf.d/nginx.conf
COPY ./certs/nginx.crt /etc/nginx/ssl/nginx.crt
COPY ./certs/nginx.key /etc/nginx/ssl/nginx.key

EXPOSE 80 443