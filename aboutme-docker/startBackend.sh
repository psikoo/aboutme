#!/bin/bash
echo "Starting the backend"
cd ..
sudo git pull
cd aboutme-backend
sudo docker build -t aboutme-backend .
cd ../aboutme-docker
sudo docker compose down
sudo docker compose up -d