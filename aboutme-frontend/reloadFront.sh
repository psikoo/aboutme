#!/bin/bash
echo "Reloading the frontend"
cd .. 
sudo git pull
echo "y2k"
cd aboutme-frontend/y2k/vue
sudo npm run build