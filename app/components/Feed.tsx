import { Card, Image, Text, Avatar, Group, ActionIcon } from '@mantine/core';
import { IconHeart, IconMessageCircle, IconSend, IconBookmark } from '@tabler/icons-react';
import { posts } from '../mockData/posts';

export function Feed() {
  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      {posts.map((post) => (
        <Card key={post.id} shadow="sm" padding="lg" radius="md" withBorder style={{ marginBottom: '1rem' }}>
          <Card.Section>
            <Group justify="space-between" p="md">
              <Group>
                <Avatar src={post.user.avatar} alt={post.user.name} radius="xl" />
                <div>
                  <Text size="sm">{post.user.username}</Text>
                  <Text size="xs" c="dimmed">
                    Original Audio
                  </Text>
                </div>
              </Group>
            </Group>
          </Card.Section>

          <Card.Section>
            <Image src={post.image} height={400} alt="Post image" />
          </Card.Section>

          <Group justify="space-between" p="md">
            <Group>
              <ActionIcon variant="subtle" color="gray">
                <IconHeart />
              </ActionIcon>
              <ActionIcon variant="subtle" color="gray">
                <IconMessageCircle />
              </ActionIcon>
              <ActionIcon variant="subtle" color="gray">
                <IconSend />
              </ActionIcon>
            </Group>
            <ActionIcon variant="subtle" color="gray">
              <IconBookmark />
            </ActionIcon>
          </Group>

          <Text fw={500} size="sm" px="md">
            {post.likes} likes
          </Text>

          <Text size="sm" p="md">
            <Text component="span" fw={500}>
              {post.user.username}
            </Text>{' '}
            {post.caption}
          </Text>

          <Text size="xs" c="dimmed" px="md">
            View all {post.comments.length} comments
          </Text>
        </Card>
      ))}
    </div>
  );
}
