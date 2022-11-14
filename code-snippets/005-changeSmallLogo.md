- change logo

- Copy logo files
```
mkdir packages/app/src/components/Root/logo
cp -r /my-machine/tw-logo/. packages/app/src/components/Root/logo
```
- change the small logo 
- Use the new logo in code.
Update packages/app/src/components/Root/LogoIco.tsx

Replace file with below code
```typescript
import React from 'react';
import { makeStyles } from '@material-ui/core';
import TwLogoIcon from './logo/tw.logo.icon.png';

const useStyles = makeStyles({
  logo: {
    objectFit: 'contain',
    width: 'auto',
    height: 28,
    background: 'white', 
  },
});

const LogoIcon = () => {
  const classes = useStyles();

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img className={classes.logo} src={TwLogoIcon}/>
  );
};

export default LogoIcon;
```
- change the full logo
- Update packages/app/src/components/Root/LogoFull.tsx

```typescript
import React from 'react';
import { makeStyles } from '@material-ui/core';
import TwLogoFull from './logo/tw.logo.png';

const useStyles = makeStyles({
logo: {
objectFit: 'contain',
width: 'auto',
height: 30,
background: 'white',
},
});
const LogoFull = () => {
const classes = useStyles();

// eslint-disable-next-line jsx-a11y/alt-text
return ( <img className={classes.logo} src={TwLogoFull} /> );
};

export default LogoFull;

```