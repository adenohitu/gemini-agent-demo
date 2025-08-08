import { Feed } from '../components/Feed';
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Instagram Mock" },
    { name: "description", content: "Welcome to this awesome Instagram Mock!" },
  ];
}

export default function Home() {
  return <Feed />;
}
