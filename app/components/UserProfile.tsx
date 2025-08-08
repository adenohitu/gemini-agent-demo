import { Avatar, Text, Group, Button, Grid, SimpleGrid, Tabs, rem } from '@mantine/core';
import { IconGridDots, IconBookmark, IconUserCircle } from '@tabler/icons-react';
import { users } from '../mockData/users';
import { posts } from '../mockData/posts';

// For now, let's just display the profile of the first user
const user = users[0];
const userPosts = posts.filter(p => p.user.id === user.id);

export function UserProfile() {
    const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <div>
      <Grid>
        <Grid.Col span={{ base: 12, md: 4 }} style={{display: 'flex', justifyContent: 'center'}}>
          <Avatar src={user.avatar} size={150} radius="50%" />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Group justify="space-between">
            <Text size="xl" fw={300}>{user.username}</Text>
            <Button>Follow</Button>
          </Group>
          <Group my="md">
            <Text><strong>{userPosts.length}</strong> posts</Text>
            <Text><strong>1.2k</strong> followers</Text>
            <Text><strong>245</strong> following</Text>
          </Group>
          <Text fw={500}>{user.name}</Text>
          <Text size="sm">This is a bio. Coding and creating.</Text>
        </Grid.Col>
      </Grid>

      <Tabs defaultValue="posts" mt="xl">
        <Tabs.List justify="center">
          <Tabs.Tab value="posts" leftSection={<IconGridDots style={iconStyle} />}>
            POSTS
          </Tabs.Tab>
          <Tabs.Tab value="saved" leftSection={<IconBookmark style={iconStyle} />}>
            SAVED
          </Tabs.Tab>
          <Tabs.Tab value="tagged" leftSection={<IconUserCircle style={iconStyle} />}>
            TAGGED
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="posts">
          <SimpleGrid cols={3} mt="md">
            {userPosts.map(post => (
              <img key={post.id} src={post.image} alt={post.caption} style={{width: '100%', height: 'auto', objectFit: 'cover'}}/>
            ))}
          </SimpleGrid>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}
