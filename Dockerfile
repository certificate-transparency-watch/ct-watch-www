FROM ubuntu:12.10
MAINTAINER tom@tom-fitzhenry.me.uk

RUN echo "deb http://archive.ubuntu.com/ubuntu quantal main universe" > /etc/apt/sources.list
RUN apt-get update
RUN apt-get install -y nodejs

ADD . /src
WORKDIR /src

CMD nodejs /src/scripts/web-server.js
