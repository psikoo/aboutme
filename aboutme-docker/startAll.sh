#!/bin/bash
cd ..
homeRepo=$(pwd)
varRepo="/var/www/aboutme"

echo "-- Pulling repo --"
cd $homeRepo
sudo git stash >/dev/null
sudo git pull >/dev/null
cd $varRepo
sudo git stash >/dev/null
sudo git pull >/dev/null

echo "-- Test nginx --"
sudo nginx -t >/dev/null
sudo nginx -s reload >/dev/null

echo "-- Building backend --"
cd $homeRepo/aboutme-backend
sudo docker build -t aboutme-backend:1 . >/dev/null

cd $homeRepo/aboutme-java
./build.sh >/dev/null
sudo docker build -t aboutme-java:1 . >/dev/null

echo "-- Building the frontend --"
cd $varRepo/aboutme-frontend/site/vue/y2k/vue
echo "> y2k"
sudo npm install >/dev/null
sudo npm run build >/dev/null

cd $varRepo/aboutme-frontend/site/vue/cv/vue
echo "> cv"
sudo npm install >/dev/null
sudo npm run build >/dev/null

cd $varRepo/aboutme-frontend/site/vue/dgt/vue
echo "> dgt"
sudo npm install >/dev/null
sudo npm run build >/dev/null

cd $varRepo/aboutme-frontend/site/html/blog
echo "> blog"
fileNum=$(ls ./entries | wc -l)
echo $fileNum > ./entries/counter.txt

cd $homeRepo/aboutme-docker
sudo docker compose down >/dev/null
sudo docker compose up -d >/dev/null

echo "-- Script End --"
