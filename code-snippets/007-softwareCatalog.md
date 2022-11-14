- To create personal github access token follow [link](https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- For local development only - add token to the app-config.local.yaml

```shell
integrations:
  github:
    - host: github.com
      token: <token>  >
```

- To register a new component
  - create a new repo in git and run following commands
```shell
cp -r /my-machine/counter /workspace/counter-entities/
cd /workspace/counter-entities/
git init
git commit -am "Add counter entities"
git remote add origin <Your Git Repo Path>
git push -u origin master
```

Register entities by giving full URL for all-counter.yaml


- Register User and Group

```shell
cp -r /my-machine/users /workspace/backstage-users
cd /workspace/backstage-users/
git init
git commit -am "Add backstage user"
git remote add origin <Your Git Repo Path>
git push -u origin master

```
Add following entry to  app-config.yaml to configure location

```typescript
- type: url
      target: <path to org.yml in your repo>
      rules:
        - allow: [User, Group]
```


- Register new OAuth 
Put Homepage URL as http://localhost:3000
Put Authorization callback URL http://localhost:7007/api/auth/github

Put it in app-config-local.yaml


```shell
auth:
  providers: 
    github:
      development:
        cliendId: <cliendId>
        clientSecret: <clientSecret>
```

Add below code in App.tsx
```
components: {
    SignInPage: props => (
      <SignInPage 
        {...props}
        auto
        provider={{
          id: 'github-auth-provider',
          title: 'GitHub',
          message: 'Sign in using Github',
          apiRef: githubAuthApiRef,
        }}
      />
    )
  }
 ```

Add import
```shell
import { githubAuthApiRef } from '@backstage/core-plugin-api';
import { SignInPage } from '@backstage/core-components';
```

