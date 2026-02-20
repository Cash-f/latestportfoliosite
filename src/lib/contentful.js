import { createClient } from "contentful";

console.log("Space ID is:", process.env.CONTENTFUL_SPACE_ID);
console.log("Token is:", process.env.CONTENTFUL_ACCESS_TOKEN);

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const fetchProjects = async () => {
  try {
    // Try lowercase "project" here just in case
    const response = await client.getEntries({ content_type: "project" });

    // Check your VS Code Terminal (not browser console)
    console.log("RAW ITEMS FROM CONTENTFUL:", response.items);

    if (!response.items || response.items.length === 0) {
      console.warn(
        "No items found! Check if content_type matches the API ID exactly.",
      );
      return [];
    }

    return response.items.map((item) => ({
      id: item.sys.id,
      title: item.fields.title,
      role: item.fields.role,
      category: item.fields.category,
      tech: item.fields.tech,
      // Use optional chaining (?.) to prevent crashing if an image is missing
      imageUrl: item.fields.image?.fields?.file?.url
        ? `https:${item.fields.image.fields.file.url}`
        : "/placeholder.png",
      longDescription: item.fields.longDescription,
      features: item.fields.features,
      challenges: item.fields.challenges,
    }));
  } catch (error) {
    console.error("Contentful Error:", error);
    return [];
  }
};
