#!/usr/bin/env bash
ENV=${1:-development}

if [ "$ENV" = "production" ]; then
    npm run build
    npm run migrate:latest
    node dist/src/main.js
elif [ "$ENV" = "development" ]; then
    npm run migrate:latest:dev
    npm run start:dev
fi