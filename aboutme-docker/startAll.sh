#!/bin/bash
cd ..
homeRepo=$(pwd)
varRepo="/var/www/aboutme"

echo "-- Pulling repo --"
cd $homeRepo
sudo git stash 
sudo git pull
cd $varRepo
sudo git stash
sudo git pull

echo "-- Test nginx --"
sudo nginx -t
sudo nginx -s reload

echo "-- Build backend --"
cd $homeRepo/aboutme-backend
sudo docker build -t aboutme-backend:1 .

echo "-- Building the frontend --"
cd $varRepo/aboutme-frontend/y2k/vue
echo "> y2k"
sudo npm run build

cd $varRepo/aboutme-frontend/cv/vue
echo "> cv"
sudo npm run build

cd $homeRepo/aboutme-docker
sudo docker compose down
sudo docker compose up -d

echo "-- Script End --"
