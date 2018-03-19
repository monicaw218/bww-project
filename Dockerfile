FROM nginx:latest

COPY /dist/* /var/www/html/

EXPOSE 80 443 	

CMD ["nginx", "-g", "daemon off;"]