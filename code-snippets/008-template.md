

#### Create a template.
- create new template directory
```shell
mkdir /workspace/backstage-templates
cd /workspace/backstage-templates
git init
```

- Copy examples/template/ to backstage-templates
```shell
cp -r ../demo-backstage/examples/template/    springboot-kotlin/
cd springboot-kotlin 
rm ./content/*.js*
```
- Change the name and title in template.yaml file

- Add entry in app-config.yaml

```shell
- type: file
  target: ../../../backstage-templates/springboot-kotlin/template.yaml
  rules:
    - allow: [Template]
```

### Add description in readme
- Add description as parameter
  - add below text in parameter list in template.yaml
```shell
description:
    title: Description
    type: string
    description: Description of the component
    ui:autofocus: true
    ui:options:
rows: 5
```
  - add the value in fetch base
    - add description:
      ```
      description: ${{ parameters.description }}
      ```
    - Create README.md file in ./content 
    - Add following content in readme .

```shell
${{ values.name }}
${{ values.description }}

```
### Add owner component in template form
- add below text in parameter list in template.yaml
```shell
owner:
  title: Owner
  type: string
  description: Owner of componenet
  ui:field: OwnerPicker
  ui:options:
    allowFKinds: 
      - Group
      - User
```
- add the value in fetch base
  - add owner:
    ```
    owner: ${{ parameters.owner }}
    ```
- Update value in catalog-info.yaml to use owner 


### Class work: add java version, group and artifactID
  - Copy build.gradle and settings.gradle files from accelerator to content.
  - Add gradle wrapper to project
  - Copy “gradle” directory to content
  - Copy gradlew scripts to content.
  - 

### github Actions
- register the existing project which already have github workflow defined
- https://github.com/backstage-workshop/springboot-accelerator
- using templates
- Add annotations under metadata tag in catalog-info.yaml
```shell
    annotations:
            github.com/project-slug: ${{values.destination.owner + "/" + values.destination.repo}}
```
      
- Add following line in template.yaml in values of fetch base step
        ```shell
          destination: ${{ parameters.repoUrl | parseRepoUrl }}
        ```
 
