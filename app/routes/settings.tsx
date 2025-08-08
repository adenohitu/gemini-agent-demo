import { Title, Stack, Switch, Select } from '@mantine/core';

export default function SettingsPage() {
  return (
    <div>
      <Title order={2} mb="lg">Settings</Title>
      <Stack>
        <Switch
          label="Enable dark mode"
          description="Switch between light and dark theme"
        />
        <Switch
          label="Push notifications"
          description="Receive push notifications for new messages and likes"
          defaultChecked
        />
        <Select
          label="Language"
          placeholder="Pick a language"
          data={['English', 'Spanish', 'French', 'German']}
          defaultValue="English"
        />
      </Stack>
    </div>
  );
}
