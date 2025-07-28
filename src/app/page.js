import { client } from "../sanity/lib/client";
import HomeClient from "../components/HomeClient";

async function getProjects() {
  const query = `*[_type == "project"] | order(_createdAt asc)`;
  const projects = await client.fetch(query);
  return projects;
}

export default async function HomePage() {
  const projects = await getProjects();

  return <HomeClient projects={projects} />;
}
