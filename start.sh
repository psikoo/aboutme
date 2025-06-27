#!/bin/bash
homeRepo=$(pwd)
varRepo="/var/www/caitmoe"

echo "-- Pulling repo --"
cd $homeRepo
sudo git stash >/dev/null
sudo git pull >/dev/null
cd $varRepo
sudo git stash >/dev/null
sudo git pull >/dev/null

echo "-- Building backend --"
cd $homeRepo/aboutme-backend
sudo docker build -t aboutme-backend:1 . >/dev/null

cd $homeRepo/java-caitmoe
user=$(whoami)
sudo mvn clean validate compile assembly:assembly -DdescriptorId=jar-with-dependencies &&
sudo chown -R $user ./target &&
sudo cp ./target/autodownload-1-jar-with-dependencies.jar ./autodownload.jar
sudo docker build -t java-caitmoe:1 . >/dev/null

echo "-- Building the frontend --"
cd $varRepo/frontend-caitmoe/site/vue/y2k/vue
echo "> y2k"
sudo npm install >/dev/null
sudo npm run build >/dev/null

cd $varRepo/frontend-caitmoe/site/vue/cv/vue
echo "> cv"
sudo npm install >/dev/null
sudo npm run build >/dev/null

cd $varRepo/frontend-caitmoe/site/vue/dgt/vue
echo "> dgt"
sudo npm install >/dev/null
sudo npm run build >/dev/null

cd $varRepo/frontend-caitmoe/site/html/blog
echo "> blog"
fileNum=$(sudo ls ./entries | wc -l)
sudo echo $fileNum > ./entries/counter.txt

cd $homeRepo/aboutme-docker
sudo docker compose down >/dev/null
sudo docker compose up -d >/dev/null

echo "-- Script End --"
