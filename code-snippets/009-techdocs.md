Install python package
```sh
pip3 install mkdocs-techdocs-core==1.0.1
```

Update the app-config file with following content
```shell
techdocs:
  builder: 'local' # Alternatives - 'external'
  generator:
    runIn: 'local' # Alternatives - 'local'
  publisher:
    type: 'local'
```

Copy sample service to workspace
```sh
cp -r /my-machine/springboot-kotlin-service/ /workspace/

```


Register component on app-config.yaml

 - type: file
      target: ../../../springboot-kotlin-service/catalog-info.yaml
