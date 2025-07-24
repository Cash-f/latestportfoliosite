export const allProjects = [
  {
    id: 1,
    title: "Beach Campfire Scene",
    role: "Solo Developer",
    category: "3D Art",
    tech: ["Blender", "Substance-Designer", "Unreal Engine"],
    imageUrl: "/Renders_Wireframes/BeachCampfire.png",
    longDescription:
      "Crafted a complete 3D environment scene depicting a tranquil yet tense beach campfire at sunset. The primary objective was to practice world-building and environmental storytelling, creating a scene that implies a narrative through the careful placement of assets. The scene's warm, low-light atmosphere was achieved using a combination of emissive materials for the fire and Lumen global illumination in Unreal Engine. All key assets were modeled and textured specifically for this project.",
    features: [
      "Environmental Storytelling: Assets were composed to suggest a story of survival or a moment of rest in a dangerous world.",
      "Custom Asset Creation: Modeled all key props, including the AK-47, ice axe, and furniture, using a hard-surface workflow in Blender.",
      "PBR Texturing: Developed realistic PBR materials in Substance Painter with a focus on environmental wear appropriate for a beach setting.",
      "Dynamic Lighting: Built an atmospheric lighting setup in Unreal Engine, centered on the emissive campfire and a directional light for the setting sun.",
      "Post-Processing: Utilized Unreal Engine's post-processing volumes and LUTs to fine-tune color grading, bloom, and volumetric fog to achieve a stylized, cinematic look.",
    ],
    challenges:
      "The most significant challenge was achieving a believable low-light scene. Balancing the intensity of the emissive campfire against the soft, ambient light of the setting sun required careful tuning of Unreal Engine's Lumen global illumination and reflection systems. Iterating on the volumetric fog and post-processing settings was key to capturing the final cinematic mood without the scene becoming too dark or washed out.",
    links: [{ text: "View on ArtStation", url: "#" }],
  },
  {
    id: 2,
    title: "Detailed 'Hero' Flashlight",
    role: "Solo Developer",
    category: "3D Art",
    tech: ["Blender", "Substance-Painter", "Unreal Engine"],
    imageUrl: "/Renders_Wireframes/image.png",
    renderUrl: "/Renders_Wireframes/flashlight_render.png",
    topologyImageUrl: "/Renders_Wireframes/Torch_Wireframe.png",
    modelUrl: "/models/flashlightforweb.glb",
    longDescription:
      "Created a game-ready, first-person flashlight model, designed as a 'hero' asset intended for close-up player interaction. The primary objective was to execute a complete AAA production workflow, from initial concept and blockout to final in-engine implementation. The process involved detailed hard-surface modeling in Blender, realistic PBR texturing in Substance Painter, and seamless integration into Unreal Engine, complete with a functional, dynamic light source.",
    features: [
      "Conceptualisation & Blockout: Initial design focused on a believable, tactile form, with a blockout in Blender to ensure correct scale for a first-person view.",
      "High-Poly Modeling: A detailed high-poly model was created with clean topology, focusing on fine details like grip patterns, switches, and seams.",
      "Low-Poly & UV Unwrapping: An optimised low-poly mesh was crafted via retopology, followed by an efficient UV layout to maximise texture detail.",
      "PBR Texturing: A multi-layered texturing process in Substance Painter was used to create realistic materials, including worn metal and subtle surface imperfections.",
      "Engine Implementation: The final asset was imported into Unreal Engine, where a spot light component was attached and configured to emit a functional, performance-friendly light beam.",
    ],
    challenges:
      "The main challenge was balancing the high-fidelity detail required for a 'hero' asset against the performance constraints of a real-time game engine. This was overcome by meticulously optimising the low-poly model's topology and creating an efficient UV layout. This approach ensured the baked high-poly details and 4K textures provided maximum visual impact without an excessive performance cost, a critical consideration to achieve my goal.",
    links: [{ text: "View on ArtStation", url: "#" }],
  },
  {
    id: 3,
    title: "Advanced Weapon System",
    role: "Solo Developer",
    category: "Unreal Engine",
    tech: ["Unreal Engine", "Blueprints", "C++"],
    imageUrl: "/Renders_Wireframes/ZombieWaveGampeplayExample.png",
    longDescription:
      "Architected a modular, data-driven weapon system entirely within Unreal Engine's Blueprint visual scripting system. The primary goal was to create a flexible and easily expandable framework that could handle a wide variety of firearms, each with unique stats and behaviors. The system features multiple firing modes, precise hitscan mechanics, and is deeply interwoven with a custom inventory component for seamless equipping, unequipping, and management.",
    features: [
      "Data-Driven Design: Utilized Data Tables to manage all weapon statistics (damage, fire rate, range) and effects, allowing for rapid iteration and the addition of new weapons without changing code.",
      "Versatile Firing Modes: Implemented a robust system supporting single, burst, and fully automatic fire, handled by a single function that adapts its behavior based on the current weapon's data.",
      "Precise Hitscan Mechanics: Developed an accurate hitscan system using line traces for instant shot registration, complete with calculations for damage falloff over distance.",
      "Seamless Inventory Integration: Designed for deep integration with an inventory system, handling equip/unequip logic, triggering character animations, and updating the player's state.",
      "Modular Effects Handler: Created a dedicated function to spawn cosmetic effects like muzzle flashes, impact particles, and sound cues, all dynamically pulled from the weapon's Data Table.",
    ],
    challenges:
      "The main challenge was architecting the system to be highly modular and decoupled to avoid messy 'spaghetti' Blueprints. I overcame this by using Blueprint Interfaces and an event-driven design for all communication between the weapon, the player character, and the inventory system. This approach ensures that any component can be modified or replaced without breaking the entire framework, which is crucial for creating a scalable and maintainable game project.",
    links: [{ text: "View on GitHub", url: "#" }],
  },
  {
    id: 4,
    title: "Portfolio Website",
    role: "Solo Developer",
    category: "Web Dev",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Libaries"],
    imageUrl: "/Renders_Wireframes/webdev.png",
    longDescription:
      "Developed a fully responsive, modern personal portfolio from the ground up to serve as a central hub for my projects and professional skills. Built with Next.js for its high-performance architecture and styled using the next-generation Tailwind CSS v4 engine, the site features a highly customised and themeable design system powered by CSS variables. Smooth, fluid animations were implemented throughout using Framer Motion to create an engaging and professional user experience.",
    features: [
      "Advanced theming with CSS variables and Tailwind CSS v4's @theme at-rule.",
      "Built with a modular, reusable component architecture in React.",
      "Engaging user experience with scroll-based and layout animations via Framer Motion.",
      "Client-side state management with React Hooks to create an interactive, filterable project gallery.",
    ],
    challenges:
      "A key challenge was architecting the styling system using the alpha version of Tailwind CSS v4. This involved moving away from traditional tailwind.config.js files and the use of the new @theme at-rule directly within the global CSS. This required a deep dive into the new documentation and resulted in a highly efficient CSS architecture.",
    links: [{ text: "View on GitHub", url: "#" }],
    codeSnippets: [
      {
        explanation:
          "A reusable ProjectCard component was created to display project information consistently. It receives a 'project' object as a prop and uses Next.js's <Image> component for optimized image handling.",
        code: `
const ProjectCard = ({ project, onClick }) => {
  return (
    <div onClick={() => onClick(project)} className="group block...">
      <Image
        src={project.imageUrl}
        alt={project.title}
        width={600}
        height={400}
        className="w-full h-48 object-cover..."
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        {/* ... */}
      </div>
    </div>
  );
};`,
      },
      {
        explanation:
          "React's useState hook manages the currently selected category for the project filter. The list of projects is then dynamically filtered based on this state before rendering.",
        code: `
const [activeCategory, setActiveCategory] = useState("All");

const filteredProjects = activeCategory === "All"
  ? allProjects
  : allProjects.filter((p) => p.category === activeCategory);`,
      },
    ],
  },

  {
    id: 5,
    title: "Forest Clearing Scene",
    role: "Solo Developer",
    category: "3D Art",
    tech: ["Blender", "Substance-Designer", "Unreal Engine"],
    imageUrl: "/Renders_Wireframes/ForestClearing.png",
    longDescription:
      "Crafted a complete 3D environment to capture a mysterious forest clearing at sunset. The primary objective was to practice environmental storytelling, creating a scene that evokes a sense of unease and mystery through the careful arrangement of 'found tools' on a makeshift table. The scene's distinct, hazy red atmosphere was created using a combination of a primary directional light and volumetric fog within Unreal Engine to produce striking god rays.",
    features: [
      "Environmental Storytelling: Assets like the worn axe, lock, and stick grenade are deliberately placed to raise questions and suggest a story of someone preparing for a difficult task.",
      "Custom Asset Creation: Modeled all key foreground props—the axe, lock, stick grenade, and table, using a hard-surface workflow in Blender.",
      "PBR Texturing: Applied realistic PBR materials in Substance Painter, focusing on wear-and-tear like scuffs on the tools and moss on the stone table to ground them in the environment.",
      "Dynamic Lighting: Engineered an atmospheric lighting setup in Unreal Engine dominated by a single strong directional light, filtered through foliage to create dramatic shadows and god rays.",
      "Post-Processing: Leveraged Unreal Engine's post-processing volumes to establish the final cinematic color grade, adjusting bloom, exposure, and color balance to achieve the stylized look.",
    ],
    challenges:
      "The most significant challenge was achieving a believable low-light scene. Balancing the intensity of the emissive campfire against the soft, ambient light of the setting sun required careful tuning of Unreal Engine's Lumen global illumination and reflection systems. Iterating on the volumetric fog and post-processing settings was key to capturing the final cinematic mood without the scene becoming too dark or washed out.",
    links: [{ text: "View on ArtStation", url: "#" }],
  },
];
