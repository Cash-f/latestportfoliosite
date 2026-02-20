export const revalidate = 60;

import { fetchProjects } from "@/lib/contentful";
import AllProjectsClient from "@/components/AllProjectsClient";

export default async function AllProjectsPage() {
  const projects = await fetchProjects();

  return <AllProjectsClient allProjects={projects} />;
}
