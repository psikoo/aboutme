#!/bin/bash

#* Get cameraId
echo "$(whoami) - get.sh"
curl -s -k --location 'https://192.168.0.40:3000/api/dgt/cameras' > ./request/cams.json
