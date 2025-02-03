#!/bin/bash
echo "-- Pulling repo --"
cd .. # home /aboutme
sudo git stash 
sudo git pull
echo "-- Starting nginx --"
sudo nginx -t
sudo nginx -s reload
echo "-- Starting the backend --"
cd aboutme-backend # home /aboutme/aboutme-backend
sudo docker build -t aboutme-backend:1 .
cd ../aboutme-docker # home /aboutme/aboutme-docker
sudo docker compose down
sudo docker compose up -d
echo "-- Starting the frontend --"
echo "-- Pulling repo --"
cd /var/www/aboutme # var /aboutme
sudo git stash
sudo git pull
cd /var/www/aboutme/aboutme-frontend # var /aboutme/aboutme-frontend
cd y2k/vue
echo "> y2k"
sudo npm run build
cd /var/www/aboutme/aboutme-frontend # var /aboutme/aboutme-frontend
cd cv/vue
echo "> cv"
sudo npm run build
echo "-- Script End --"
