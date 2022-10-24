FROM node:16.14-alpine
WORKDIR /app-backend
EXPOSE 3001

COPY . .

ENTRYPOINT [ "npm" ]
RUN npm install
CMD ["start"]