To create a plugin, run following command from your backstage app directory.

```sh
yarn create-plugin
```
---

To visit the plugin page
1. Run the backstage app
  ```sh
  yarn dev
  ```
2. Open browser and visit
  ```
  http://localhost:3000/hello
  ```
---  
To add button for "Hello" page in sidebar

Make following changes in `packages/app/src/components/Root/Root.tsx`

```typescript
//import EmojiPeopleIcon
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
```

```typescript
//Siderbar item 
<SidebarItem icon={EmojiPeopleIcon} to="/hello" text="Hello" />

```
---
Plugin content for a catalog entity

Make following changes in `packages/app/src/components/catalog/EntityPage.tsx`

```typescript
//import HelloPage component
import { HelloPage } from '@internal/plugin-hello';
```
```typescript
//Add HelloPage to websiteEntityPage

const websiteEntityPage = (
  <EntityLayout>
    //... other routes
    //... other routes

    <EntityLayout.Route path="/hello" title="Hello">
      <HelloPage/>
    </EntityLayout.Route>
  </EntityLayout>
);

```
---
Accessing selected entity in plugin

Add catalog-react to plugin
```sh
yarn add --cwd plugins/hello @backstage/plugin-catalog-react
```

To access the entity in HelloPage component
Make following changes in `plugins/hello/src/components/ExampleComponent/ExampleComponent.tsx`

```typescript
//import useEntity
import { useEntity } from '@backstage/plugin-catalog-react';
```
```typescript
export const ExampleComponent = () => {
  //access entity with effect
  const { entity } = useEntity();
  const entityName = entity.metadata.name
  return (
  <Page themeId="tool">
    <Header title="Welcome to hello!" subtitle="Optional subtitle">
      <HeaderLabel label="Owner" value="Team X" />
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <Content>
      <ContentHeader title="Plugin title">
        <SupportButton>A description of your plugin goes here.</SupportButton>
      </ContentHeader>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <InfoCard title="Information card">
            <Typography variant="body1">
              //Use entity name in component
              Name of the entity is <b>{entityName}</b>
            </Typography>
          </InfoCard>
        </Grid>
        <Grid item>
          <ExampleFetchComponent />
        </Grid>
      </Grid>
    </Content>
  </Page>
)};
```
---
Start the backend service

Copy springboot sample service to your workspace
```sh
sudo -E ./gradlew bootRun
```

---
Create the plugin backend

Use plugin id: hello-backend
```sh
yarn create-plugin --backend
```

Implement backend api

Add following lines to `plugins/hello-backend/src/service/router.ts`
```typescript
import fetch from "node-fetch";
```

```typescript
  router.get('/', async (_, res) => {
    logger.info('Hello!');
    const hello = await fetch('http://localhost:8080/api/v1/hello');
    hello.body.pipe(res);
  })
```

Wire plugin-backend in Backstage

Add plugin to backend dependencies
Insert following lines in `packages/backend/package.json`
```json
    "@internal/plugin-hello-backend":"^0.1.0",
```

Create plugin in backend
Create file `packages/backend/src/plugins/hello.ts` and add following lines.
```typescript
import { createRouter } from '@internal/plugin-hello-backend';
import { Router } from 'express';
import { PluginEnvironment } from '../types';

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  return await createRouter({
    logger: env.logger,
  });
}
```

Wire plugin in backend api
Add following files to `packages/backend/src/index.ts`
```typescript
import hello from './plugins/hello';
```

```typescript
 const helloEnv = useHotMemoize(module, () => createEnv('hello'));
```

```typescript
  apiRouter.use('/hello', await hello(helloEnv));
```

To test the plugin backend API endpoint
```
http://localhost:7007/api/hello
```
---
Calling backend api from plugin frontend
Add following lines in `plugins/hello/src/components/ExampleFetchComponent/ExampleFetchComponent.tsx`

```typescript
import {configApiRef, useApi} from "@backstage/core-plugin-api";
```

```typescript
export const ExampleFetchComponent = () => {
  //get config
  const config = useApi(configApiRef);
  //find app backend
  const backendUrl = config.getString('backend.baseUrl');

  const { value, loading, error } = useAsync(async (): Promise<User[]> => {
    //call backend
    const helloBackend = await fetch(`${backendUrl}/api/hello`);
    const response = await fetch('https://randomuser.me/api/?results=20');
    const data = await response.json();
    return data.results;
  }, []);

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <Alert severity="error">{error.message}</Alert>;
  }

  return <DenseTable users={value || []} />;
};
```
---
Configure a proxy

Add following lines to `app-config.yaml` under `backend.proxy`
```yaml
  '/hello':
    target: 'http://localhost:8080/api/v1/hello'
```
To test the proxy endpoint
```
curl http://localhost:7007/api/proxy/hello
```
---

Invoking proxy endpoint from frontend

Add following lines in `plugins/hello/src/components/ExampleFetchComponent/ExampleFetchComponent.tsx`

```typescript
export const ExampleFetchComponent = () => {
  const config = useApi(configApiRef);
  const backendUrl = config.getString('backend.baseUrl');

  const { value, loading, error } = useAsync(async (): Promise<User[]> => {
    const helloBackend = await fetch(`${backendUrl}/api/hello`);
    //Calling proxy
    const helloProxy = await fetch(`${backendUrl}/api/proxy/hello`); 
    const response = await fetch('https://randomuser.me/api/?results=20');
    const data = await response.json();
    return data.results;
  }, []);

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <Alert severity="error">{error.message}</Alert>;
  }

  return <DenseTable users={value || []} />;
};
```



