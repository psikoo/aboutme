#!/bin/bash

#* Get cameraId
curl -s -k --location 'https://nest-caitmoe:3000/api/dgt/cameras' > ./request/cams.json
