- Add health check
- create healthcheck.ts in backen and add following code

packages/backend/src/plugin/healthcheck.ts
```
import { createStatusCheckRouter } from '@backstage/backend-common';
import { PluginEnvironment } from '../types';

export default async function createRouter({ logger }: PluginEnvironment) {
  return await createStatusCheckRouter({ logger, path: '/healthcheck' });
}
```
- change packages/backend/src/index.ts

```typescript
import healthcheck from './plugins/healthcheck';
```

```typescript
  const healthcheckEnv = useHotMemoize(module, () => createEnv('healthcheck'));
```

Add before apirouter
```typescript
    .addRouter('', await healthcheck(healthcheckEnv))
```


curl http://localhost:7007/healthcheck