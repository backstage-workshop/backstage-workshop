- Set correct values in app-config.production.yaml 

```shell
database:
    client: pg
    connection:
      host: ${POSTGRES_SERVICE_HOST}
      port: ${POSTGRES_SERVICE_PORT}
      user: ${POSTGRES_USER}
      password: ${POSTGRES_PASSWORD}
```

Change node version to 18 in Dockerfile at /package/backend/DockerFile

- Build the code. Run following commands. 
```
yarn tsc && yarn build:backend
```


- Build the Docker image. Run following command.
```shell
yarn build-image --tag backstage:1.0.0
```

```shell
cd /my-machine/backstage-local-dev
docker compose up
```


