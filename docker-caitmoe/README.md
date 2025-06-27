## startAll.sh

It's a script that starts all the docker containers and builds the vue applications.


## docker-compose

```bash
# Database:           (ports)
- postgres:17          500
- pgadmin4:8.13        5050
# Backend:
- nest-caitmoe:1    3000
- nginx:1.27.4         80/443
```