- Create App
  - change in app-config.yaml
```shell
  database:
    client: pg
    connection:
      host: ${POSTGRES_SERVICE_HOST}
      port: ${POSTGRES_SERVICE_PORT}
      user: ${POSTGRES_USER}
      password: ${POSTGRES_PASSWORD} 
```

- Access frontend
  http://localhost:3000


