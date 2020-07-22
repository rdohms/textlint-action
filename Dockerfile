FROM node:lts-alpine3.12

RUN apk add --no-cache bash

COPY . /

ENTRYPOINT [ "/setup-and-run.sh" ]