import { Outlet } from "react-router";
import { Container } from '@mantine/core';

export function LoginLayout() {
  return (
    <Container size="xs" style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
      <Outlet />
    </Container>
  );
}
