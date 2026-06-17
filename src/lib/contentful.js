import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const fetchProjects = async () => {
  try {
    const response = await client.getEntries({ content_type: "project" });

    return response.items.map((item) => {
      const f = item.fields; // Shortcut to save typing

      return {
        id: item.sys.id,
        title: f.title,
        role: f.role,
        category: f.category,
        tech: f.tech || [],

        // Main Thumbnail
        imageUrl: f.image?.fields?.file?.url
          ? `https:${f.image.fields.file.url}`
          : "/placeholder.png",

        // NEW: Secondary Images (Matching your schema exactly)
        image2Url: f.image2?.fields?.file?.url
          ? `https:${f.image2.fields.file.url}`
          : null,

        image3Url: f.image3?.fields?.file?.url
          ? `https:${f.image3.fields.file.url}`
          : null,

        longDescription: f.longDescription,

        // Improved Features logic: handles both arrays and strings safely
        features: f.features
          ? Array.isArray(f.features)
            ? f.features
            : f.features.split("\n").filter((line) => line.trim() !== "")
          : [],

        challenges: f.challenges,

        // Ensure Links JSON is passed through correctly
        links: f.links || null,
      };
    });
  } catch (error) {
    console.error("Contentful Error:", error);
    return [];
  }
};
