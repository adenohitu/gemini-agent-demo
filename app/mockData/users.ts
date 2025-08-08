export interface User {
  id: string;
  username: string;
  avatar: string;
  name: string;
}

export const users: User[] = [
  {
    id: '1',
    username: 'jules_the_dev',
    name: 'Jules',
    avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
  },
  {
    id: '2',
    username: 'react_fan',
    name: 'React Fan',
    avatar: 'https://avatars.githubusercontent.com/u/2?v=4',
  },
  {
    id: '3',
    username: 'mantine_lover',
    name: 'Mantine Lover',
    avatar: 'https://avatars.githubusercontent.com/u/3?v=4',
  },
];
