#!/bin/bash

#* Get cameraId
echo "$(whoami) - get.sh"
curl -s -k --location 'https://nest-caitmoe:3000/api/dgt/cameras' > ./request/cams.json
