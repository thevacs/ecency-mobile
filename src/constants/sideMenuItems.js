import { default as ROUTES } from './routeNames';

const authMenuItems = [
  {
    name: 'Profile',
    route: 'Profile',
    icon: 'user-o',
    id: 'profile',
  },
  {
    name: 'Bookmarks',
    route: 'bookmarks',
    icon: 'star-o',
    id: 'bookmarks',
  },
  {
    name: 'Favorites',
    route: 'favorites',
    icon: 'heart-o',
    id: 'favorites',
  },
  {
    name: 'Drafts',
    route: 'drafts',
    icon: 'file-o',
    id: 'drafts',
  },
  {
    name: 'Schedules',
    route: 'schedules',
    icon: 'clock-o',
    id: 'schedules',
  },
  {
    name: 'Gallery',
    route: 'galery',
    icon: 'picture-o',
    id: 'gallery',
  },
  {
    name: 'Settings',
    route: ROUTES.SCREENS.SETTINGS,
    icon: 'gear',
    id: 'settings',
  },
  {
    name: 'Add Account',
    route: ROUTES.SCREENS.LOGIN,
    icon: 'plus-square-o',
    id: 'add_account',
  },
];

const noAuthMenuItems = [
  {
    name: 'Add Account',
    route: ROUTES.SCREENS.LOGIN,
    icon: 'plus-square-o',
    id: 'add_account',
  },
  {
    name: 'Settings',
    route: ROUTES.SCREENS.SETTINGS,
    icon: 'gear',
    id: 'settings',
  },
];

export default {
  AUTH_MENU_ITEMS: authMenuItems,
  NO_AUTH_MENU_ITEMS: noAuthMenuItems,
};
