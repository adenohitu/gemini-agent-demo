import { users, User } from './users';

export interface Story {
  id: string;
  user: User;
  image: string;
}

export const stories: Story[] = [
  {
    id: 's1',
    user: users[0],
    image: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 's2',
    user: users[1],
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 's3',
    user: users[2],
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop',
  },
];
