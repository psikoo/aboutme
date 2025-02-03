#!/bin/bash
echo "-- Pulling repo --"
cd ..
sudo git stash 
sudo git pull
echo "-- Starting the backend --"
# home /aboutme/aboutme-backend
cd ../aboutme-backend
sudo docker build -t aboutme-backend:1 .
# home /aboutme/aboutme-docker
cd ../aboutme-docker
sudo docker compose down
sudo docker compose up -d
echo "-- Starting the frontend --"
# var /aboutme
echo "-- Pulling repo --"
cd /var/www/aboutme
sudo git stash
sudo git pull
# var /aboutme/aboutme-frontend
cd /var/www/aboutme/aboutme-frontend
cd y2k/vue
echo "> y2k"
sudo npm run build
cd /var/www/aboutme/aboutme-frontend
cd cv/vue
echo "> cv"
sudo npm run build
echo "-- Script End --"
