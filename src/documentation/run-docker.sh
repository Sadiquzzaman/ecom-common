#!/bin/bash
# docker rm $(docker ps  -aq --no-trunc --filter name=^/chaad)
# docker build -t chaad-nginx ./ --no-cache --force-rm
# docker run -it -p 8000:80 --name chaad-nginx  chaad-nginx 
# docker exec chaad-nginx nginx -s reload

docker-compose up -d --remove-orphans --no-deps --build