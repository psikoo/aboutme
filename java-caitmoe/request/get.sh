#!/bin/bash

#* Get cameraId
touch ./request/cams.json
curl -s -k --location 'https://192.168.0.40:3000/api/dgt/cameras' > ./request/cams.json
