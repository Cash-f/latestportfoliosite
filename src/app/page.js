export const revalidate = 60;

import { fetchProjects } from "@/lib/contentful";
import HomeClientWrapper from "@/components/HomeClientWrapper";

export default async function HomePage() {
  const projects = await fetchProjects();

  return <HomeClientWrapper allProjects={projects} />;
}
