FROM nginx:alpine

LABEL author="Moustakime KIFIA"
RUN rm /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY ./nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 80 443

ENTRYPOINT ["nginx", "-g", "daemon off;"]