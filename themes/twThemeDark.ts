import { BackstageOverrides } from '@backstage/core-components';
import { BackstageOverrides as CatalogReactOverrides } from '@backstage/plugin-catalog-react';
import { BackstageTheme, createTheme, darkTheme, lightTheme } from '@backstage/theme';
import Background2 from './darkBackground.png';
import Background3 from './tw_illustration_25.jpg';

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
        ...darkTheme.palette,
        text: {
            primary: '#e1e2e2',
        },
        primary: {
            main: '#d6d7d7',
            light: '#FF0000',
            dark: '#172B4D',
        },
        secondary: {
            main: '#d6d7d7',
            light: '#FFAB00',
            dark: '#6554C0',
        },
        background: {
            default: '#05212a',
        },
        action: {
            ...darkTheme.palette.action,
            hover: '#d6d7d7',
        },
        navigation: {
            ...darkTheme.palette.navigation,
            background: '#003D4F',
            color: '#FFFFFF',
            indicator: '#05212a',
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
                height: '100px',
                backgroundPosition: 'bottom',
            },
            title: {
                color: '#d6d7d7',
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
                padding: 0,
                backgroundImage: `url(${Background3}) !important`,
                '& h4': {
                    padding: '10px',
                    background: '#013d4f'
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
                color: '#d6d7d7',
            },
        },
        MuiPaper: {
            root: {
                backgroundColor: '#002d3c',
            }
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
        },
        BackstageHeaderTabs: {
            tabsWrapper: {
                backgroundColor: '#002d3d',
            }
        }
    }};

export const twThemeDark: BackstageTheme = {
    ...baseTheme,
    overrides: {
        ...createCustomThemeOverrides(baseTheme),
        ...baseTheme.overrides,
    },
};s