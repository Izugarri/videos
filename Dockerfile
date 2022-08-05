FROM nginxinc/nginx-unprivileged:stable-alpine 
COPY Control /usr/share/nginx/Control
EXPOSE 8080
USER 101
CMD nginx -g 'daemon off;'
