FROM nginx:latest

COPY /src/App.js /usr/share/nginx/html/

EXPOSE 80 443 	

CMD ["nginx", "-g", "daemon off;"]
