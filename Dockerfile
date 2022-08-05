FROM nginxinc/nginx-unprivileged:stable-alpine 
COPY / /usr/share/nginx/
EXPOSE 8080
USER 102
CMD nginx -g 'daemon off;'
