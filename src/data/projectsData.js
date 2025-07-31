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
      "Post-Processing: Utilised Unreal Engine's post-processing volumes and LUTs to fine-tune color grading, bloom, and volumetric fog to achieve a stylised, cinematic look.",
    ],
    challenges:
      "The most significant challenge was achieving a believable low-light scene. Balancing the intensity of the emissive campfire against the soft, ambient light of the setting sun required careful tuning of Unreal Engine's Lumen global illumination and reflection systems. Iterating on the volumetric fog and post-processing settings was key to capturing the final cinematic mood without the scene becoming too dark or washed out.",
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
    links: [
      {
        text: "View on ArtStation",
        url: "https://www.artstation.com/artwork/kNdPnK",
      },
    ],
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
      "Data-Driven Design: Utilised Data Tables to manage all weapon statistics (damage, fire rate, range) and effects, allowing for rapid iteration and the addition of new weapons without changing code.",
      "Versatile Firing Modes: Implemented a robust system supporting single, burst, and fully automatic fire, handled by a single function that adapts its behavior based on the current weapon's data.",
      "Precise Hitscan Mechanics: Developed an accurate hitscan system using line traces for instant shot registration, complete with calculations for damage falloff over distance.",
      "Seamless Inventory Integration: Designed for deep integration with an inventory system, handling equip/unequip logic, triggering character animations, and updating the player's state.",
      "Modular Effects Handler: Created a dedicated function to spawn cosmetic effects like muzzle flashes, impact particles, and sound cues, all dynamically pulled from the weapon's Data Table.",
    ],
    challenges:
      "The main challenge was architecting the system to be highly modular and decoupled to avoid messy 'spaghetti' Blueprints. I overcame this by using Blueprint Interfaces and an event-driven design for all communication between the weapon, the player character, and the inventory system. This approach ensures that any component can be modified or replaced without breaking the entire framework, which is crucial for creating a scalable and maintainable game project.",
    codeSnippets: [
      {
        explanation:
          "The weapon's header (.h) file defines the core structure. It uses a USTRUCT (FWeaponData) to hold all weapon stats, making the system data-driven. Key functions like Fire() are exposed to Blueprints using UFUNCTION for maximum flexibility.",
        code: `
// Weapon.h
#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "Weapon.generated.h"

USTRUCT(BlueprintType)
struct FWeaponData
{
  GENERATED_BODY()

  UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Stats")
  float Damage;

  UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Stats")
  float FireRate;

  UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Stats")
  float Range;
};

UCLASS()
class MYPROJECT_API AWeapon : public AActor
{
  GENERATED_BODY()

public:
  AWeapon();

  UFUNCTION(BlueprintCallable, Category = "Weapon")
  void Fire();

protected:
  UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Weapon Config")
  FWeaponData WeaponStats;

  UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Components")
  UStaticMeshComponent* WeaponMesh;
};
      `,
      },
      {
        explanation:
          "The implementation (.cpp) of the Fire() function. This shows the logic for a hitscan weapon, performing a line trace from the player's camera to instantly determine what was hit. It's a foundational piece for registering damage and spawning impact effects.",
        code: `
// Weapon.cpp
#include "Weapon.h"
#include "Kismet/GameplayStatics.h"
#include "DrawDebugHelpers.h"

void AWeapon::Fire()
{
  APawn* OwnerPawn = Cast<APawn>(GetOwner());
  if (!OwnerPawn) return;
  AController* OwnerController = OwnerPawn->GetController();
  if (!OwnerController) return;

  FVector Location;
  FRotator Rotation;
  OwnerController->GetPlayerViewPoint(Location, Rotation);
  
  FVector End = Location + Rotation.Vector() * WeaponStats.Range;
  FHitResult Hit;

  // Perform the line trace
  bool bSuccess = GetWorld()->LineTraceSingleByChannel(
    Hit,
    Location,
    End,
    ECC_Visibility
  );

  // Visualize the trace in-editor
  DrawDebugLine(GetWorld(), Location, End, FColor::Red, false, 2.0f);

  if (bSuccess && Hit.GetActor())
  {
    // Apply damage to the hit actor
    UGameplayStatics::ApplyPointDamage(
      Hit.GetActor(),
      WeaponStats.Damage,
      Rotation.Vector(),
      Hit,
      OwnerController,
      this,
      nullptr
    );
  }
}
      `,
      },
    ],
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
    links: [
      {
        text: "View on GitHub",
        url: "https://github.com/Cash-f/latestportfoliosite",
      },
    ],
    codeSnippets: [
      {
        explanation:
          "A reusable ProjectCard component was created to display project information consistently. It receives a 'project' object as a prop and uses Next.js's <Image> component for optimised image handling.",
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
      "Post-Processing: Leveraged Unreal Engine's post-processing volumes to establish the final cinematic color grade, adjusting bloom, exposure, and color balance to achieve the stylised look.",
    ],
    challenges:
      "The most significant challenge was achieving a believable low-light scene. Balancing the intensity of the emissive campfire against the soft, ambient light of the setting sun required careful tuning of Unreal Engine's Lumen global illumination and reflection systems. Iterating on the volumetric fog and post-processing settings was key to capturing the final cinematic mood without the scene becoming too dark or washed out.",
  },

  {
    id: 6,
    title: "Industrial Assembly Line",
    role: "Solo Artist",
    category: "3D Art",
    tech: ["Blender", "Cycles Render Engine"],
    imageUrl: "/Renders_Wireframes/FactoryScene.png",
    longDescription:
      "This project showcases an automated factory environment, designed to create a stark, atmospheric mood. The main goal was to practice hard-surface modeling and craft a compelling scene using volumetric lighting for use in an animation. The visual narrative contrasts a heavy, industrial setting with the unexpected presence of simple monkey heads on the assembly line, adding a touch of surrealism. The scene is lit dramatically with spotlights cutting through dense volumetric fog to create a cinematic and mysterious feel.",
    features: [
      "Hard-Surface Modeling: All industrial components, including the detailed robotic arms and the complex conveyor belt system, were modeled using a non-destructive, hard-surface workflow in Blender.",
      "Volumetric Lighting: The scene's moody atmosphere is defined by volumetric fog and strategically placed spotlights, which produce visible light rays (god rays) that add significant depth and drama.",
      "Procedural Texturing: Utilised procedural nodes within Blender to create realistic and tileable materials, such as the diamond plate texture on the floor and conveyor belt, ensuring high detail without repetitive texture maps.",
      "Selective Color Palette: A deliberate, near-monochromatic color scheme is used to emphasise the cold, mechanical nature of the factory, with the vibrant yellow of the monkey heads and robotic arms serving as a strong focal point.",
      "Cinematic Composition: A low camera angle and the sweeping curve of the conveyor belt are used as leading lines to guide the viewer's eye through the scene towards the central machinery.",
    ],
    challenges:
      "The primary challenge was balancing the atmospheric lighting. Tuning the density of the volumetric fog and the intensity of the spotlights to achieve clear, dramatic god rays without introducing excessive noise or completely obscuring the model details was a delicate process. It required numerous iterations in the Cycles render engine to find the right combination of light settings and render samples to produce a clean yet moody final image.",
  },

  {
    id: 7,
    title: "High-Poly Robot Arm",
    role: "3D Modeler & Texture Artist",
    category: "Hard-Surface Modeling",
    tech: ["Blender", "Substance Painter"],
    imageUrl: "/Renders_Wireframes/RobotArmRender.png",
    longDescription:
      "A detailed study of a single industrial asset, created to showcase the complete hard-surface modeling and texturing pipeline. The project began with a low-poly blockout to establish the core forms and proportions. This was followed by a high-poly modeling phase to add intricate details. The final asset was textured using PBR principles in Substance Painter to achieve a realistic, worn look suitable for a game engine or cinematic render.",
    topologyImageUrl: "/Renders_Wireframes/Robotarm_Wireframe.png",
    features: [
      "Low-to-High Poly Workflow: The model was built using a standard industry workflow, starting with a clean, low-poly mesh for the base shape, then creating a detailed high-poly version for baking.",
      "Non-Destructive Detailing: A modifier-based approach in Blender was used for the high-poly model, allowing for flexible adjustments to details like bevels, panel lines, and circular cutouts without committing to destructive edits.",
      "Optimised UV Unwrapping: All components were carefully unwrapped onto a single UV layout, with seams placed in concealed areas and texel density managed to ensure crisp, high-resolution details across the entire model.",
      "High-to-Low Poly Baking: Details from the high-poly mesh, such as smooth edges and floating geometry, were baked into normal and ambient occlusion maps for the low-poly model, preserving visual fidelity at a lower performance cost.",
      "Realistic PBR Texturing: Textured in Substance Painter using a multi-layered approach. Base materials like painted metal and plastic were created first, followed by layers of grime, wear, and snow using smart masks and hand-painted details to tell a story of the asset's use.",
    ],
    challenges:
      "The main challenge was maintaining clean topology on the high-poly model, especially around the curved joints and circular insets, to ensure smooth shading without artifacts after subdivision. Another significant task was creating an efficient UV map for all the separate mechanical parts, arranging them logically to optimise texture space. Finally, achieving a believable level of weathering on the base required careful layering in Substance Painter to ensure the snow and grime accumulated realistically in crevices and on upward-facing surfaces.",
  },
];
