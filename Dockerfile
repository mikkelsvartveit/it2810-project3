# syntax=docker/dockerfile:1

FROM node:16

WORKDIR /app

# Install backend dependencies
COPY ["backend/package.json", "backend/package-lock.json*", "./backend/"]
RUN cd backend && npm ci && cd ..

# Install frontend dependencies
COPY ["frontend/package.json", "frontend/package-lock.json*", "./frontend/"]
RUN cd frontend && npm ci && cd ..

# Copy backend source
COPY backend ./backend

# Copy frontend source
COPY frontend ./frontend

# Copy types module
COPY types ./types

# Build frontend
RUN cd frontend && npm run build && mkdir ../backend/public && cp -r build/* ../backend/public && cd ..

# Remove frontend source code
RUN rm -rf frontend

WORKDIR /app/backend
ENV NODE_ENV=production
CMD [ "npm", "run", "start:production" ]