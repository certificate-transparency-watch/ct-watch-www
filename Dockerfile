FROM ubuntu:14.04
MAINTAINER tom@tom-fitzhenry.me.uk

RUN echo "deb http://archive.ubuntu.com/ubuntu trusty main universe" > /etc/apt/sources.list
RUN apt-get update
RUN apt-get install -y nodejs

ADD . /src
WORKDIR /src

EXPOSE 80

CMD cd app; nodejs ../scripts/web-server.js 80
