FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
# Set environment variable for port
ENV PORT=3000

# Expose the port
EXPOSE 3000
CMD ["npm", "start"]