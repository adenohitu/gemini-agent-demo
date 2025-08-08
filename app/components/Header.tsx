import { Group, TextInput, ActionIcon } from '@mantine/core';
import { IconSearch, IconHome, IconSend, IconPlus, IconCompass, IconHeart } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <Group justify="space-between" h="100%">
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold', fontSize: '1.5rem' }}>
        Instagram
      </Link>

      <TextInput
        placeholder="Search"
        leftSection={<IconSearch size={14} />}
        radius="sm"
        w={200}
        visibleFrom="sm"
      />

      <Group gap="sm">
        <ActionIcon variant="subtle" color="gray" component={Link} to="/">
          <IconHome />
        </ActionIcon>
        <ActionIcon variant="subtle" color="gray">
          <IconSend />
        </ActionIcon>
        <ActionIcon variant="subtle" color="gray">
          <IconPlus />
        </ActionIcon>
        <ActionIcon variant="subtle" color="gray">
          <IconCompass />
        </ActionIcon>
        <ActionIcon variant="subtle" color="gray">
          <IconHeart />
        </ActionIcon>
        <ActionIcon variant="subtle" color="gray" component={Link} to="/user/jules_the_dev">
            {/* This will be a user avatar later */}
            <div style={{width: 24, height: 24, background: '#ccc', borderRadius: '50%'}}/>
        </ActionIcon>
      </Group>
    </Group>
  );
}
