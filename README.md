# Techgenies - Ecommerce Front

Frontend

## Requirements
* docker >= 20
* docker-compose >= 1.29
* vsocde with
* dev containers (plugin)

## API Stack

* node >= 18.13.0
* yarn >= 1.22.19

## Install
1. `sudo vim /etc/hosts`
2. `127.0.0.1 eat-local.techgenies.us`
3. `git clone git@github.com:devinca/ecommerce-front.git`
4. `cd ecommerce-front`
5. `cp env.dist .env`

## Deploy Locally
1. `docker build -t eat_fe_image .`
2. `docker-compose -f local.yml up`
3. Go to http://eat-local.techgenies.us

## Rebuild && Recreate Containers
`docker-compose -f local.yml up --force-recreate --build`

## Install Packages
```
docker exec -it eat_fe_app bash
yarn add moment

OR

docker exec -it eat_fe_app yarn add moment
docker exec -it eat_fe_app yarn add lodash
```

## vscode
1. `Open Project`
2. `Open Dev Containers`
3. `Clic Attach to Running Container...`


## Docker on WSL(Windows)
```
/Windows/System32/drivers/etc/hosts
127.0.0.1 eat-local.techgenies.us
```
