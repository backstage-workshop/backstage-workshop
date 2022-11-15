import { BackstageOverrides } from '@backstage/core-components';
import { BackstageOverrides as CatalogReactOverrides } from '@backstage/plugin-catalog-react';
import { BackstageTheme, createTheme, darkTheme, lightTheme } from '@backstage/theme';
import Background2 from './tw_illustration_12.jpg';
import Background3 from './tw_illustration_132.jpg';

import { AutocompleteClassKey } from '@material-ui/lab/Autocomplete';
import { AlertClassKey } from '@material-ui/lab/Alert';

// Labs types not included in overrides; https://github.com/mui/material-ui/issues/19427
declare module '@material-ui/core/styles/overrides' {
    export interface ComponentNameToClassKey {
        MuiAlert: AlertClassKey;
        MuiAutocomplete: AutocompleteClassKey;
    }
}

const baseTheme = createTheme({
    palette: {
        ...lightTheme.palette,
        text: {
            primary: '#666666',
        },
        primary: {
            main: '#003D4F',
            light: '#FF0000',
            dark: '#172B4D',
        },
        secondary: {
            main: '#003D4F',
            light: '#FFAB00',
            dark: '#6554C0',
        },
        action: {
            ...lightTheme.palette.action,
            hover: '#003D4F',
        },
        navigation: {
            ...lightTheme.palette.navigation,
            background: '#003d4f',
            color: '#FFFFFF',
            indicator: '#666666',
            navItem: {
                hoverBackground: '#46a1ac',
            },
        },
    },
    fontFamily:'Bitter',
    defaultPageTheme: 'home',
});

const createCustomThemeOverrides = (
    theme: BackstageTheme,
): BackstageOverrides & CatalogReactOverrides => {
    return {
        BackstageHeader: {
            header: {
                backgroundImage: `url(${Background2})`,
                boxShadow: 'unset',
                paddingBottom: theme.spacing(1),
                height: '100px'
            },
            title: {
                color: '#003D4F',
                fontWeight: 500,
            },
            subtitle: {
                color: '#f2617a',
                fontWeight: 500,
                fontSize: '1rem',
            },
            type: {
                color: theme.palette.primary.dark,
            }
        },
        BackstageSidebarItem: {
            label: {
                fontSize: '1rem',
                fontWeight: '600',
            },
            selected: {
                borderLeft: 'solid 3px #46a1ac !important',
                h6: {
                    fontWeight: '900'
                }
            }
        },
        BackstageSidebarDivider: {
            root: {
                background: '#606e73',
                marginBottom: '0px'
            }
        },
        BackstageItemCardHeader: {
            root: {
                backgroundImage: `url(${Background3}) !important`,
                '& h4': {
                    padding: '10px',
                    background: '#003D4F'
                },
            }
        },
        CatalogReactUserListPicker: {
            title: {
                textTransform: 'none',
            },
        },
        MuiTypography: {
            displayBlock: {
                color: '#003D4F',
            },
        },
        MuiIconButton: {
            root: {
                backgroundColor: '#e1e2e2',
                color: '#013d4f !important',
                '&:hover': {
                    backgroundColor: '#e1e2e2',
                    color: '#f1617a !important',
                },
            },
        },
        BackstageInfoCard: {
            headerTitle: {
                fontWeight: '600',
            }
        }
    }};

export const twTheme: BackstageTheme = {
    ...baseTheme,
    overrides: {
        ...createCustomThemeOverrides(baseTheme),
        ...baseTheme.overrides,
    },
};