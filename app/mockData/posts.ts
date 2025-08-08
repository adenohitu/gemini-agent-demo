import { users, User } from './users';

export interface Post {
  id: string;
  user: User;
  image: string;
  caption: string;
  likes: number;
  comments: { user: User; text: string }[];
  createdAt: string;
}

export const posts: Post[] = [
  {
    id: 'p1',
    user: users[0],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
    caption: 'Just coded something amazing! #coding #react #typescript',
    likes: 132,
    comments: [
      { user: users[1], text: 'Wow, looks great!' },
      { user: users[2], text: 'Awesome stuff!' },
    ],
    createdAt: '2 hours ago',
  },
  {
    id: 'p2',
    user: users[1],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726a?q=80&w=2070&auto=format&fit=crop',
    caption: 'Loving the new React Router v7 features.',
    likes: 256,
    comments: [
      { user: users[0], text: 'Totally agree!' },
    ],
    createdAt: '5 hours ago',
  },
  {
    id: 'p3',
    user: users[2],
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop',
    caption: 'Mantine UI makes everything so much easier.',
    likes: 512,
    comments: [],
    createdAt: '1 day ago',
  }
];
