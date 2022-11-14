- Create a new theme configuration.
  - Add file twTheme in packages/app/src/themes
  - copy content from backstage-workshop/themes/twTheme
  - Copy two images 
    - cp -r /my-machine/tw-logo/. packages/app/src/themes

- yarn add --cwd packages/app @material-ui/lab
- Add imports in App.tsx
```typescript
import { twTheme } from './themes/twTheme';
import { twThemeDark } from './themes/twThemeDark';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import LightIcon from '@material-ui/icons/WbSunny';
```

- Add theme as parmater to createApp function in App.tsx
```typescript
themes: [{
    id: 'tw-theme',
    title: 'TW Theme Light',
    variant: 'light',
    icon: <LightIcon />,
    Provider: ({ children }) => (
      <ThemeProvider theme={twTheme}>
        <CssBaseline>{children}</CssBaseline>
      </ThemeProvider>
    ),
  }],
```

#Add homepage
```
yarn add --cwd packages/app @backstage/plugin-home
```
- import following in App.tsx
```shell
import { HomePage } from "../src/components/home/HomePage";
import { HomepageCompositionRoot } from '@backstage/plugin-home';
```

- Add following router in routes

```shell
<Route path="/" element={<HomepageCompositionRoot />}>
      <HomePage />
    </Route>
```


- Update sidebar by doing changes in Root.tsx
- Add import
```shell
import CategoryIcon from '@material-ui/icons/Category';
```

Update following code to point / route to home page
```typescript
<SidebarItem icon={HomeIcon} to="/" text="Home" />
<SidebarItem icon={CategoryIcon} to="catalog" text="Catalog" />
```