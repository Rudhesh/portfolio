import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";

// Vibrant, comprehensive styling for character, clothing, computer, keyboard, table, and shoes
const applyVibrantStyling = (character: THREE.Object3D) => {
  const skinColor = "#eec2a0"; // Warm, natural skin tone
  const skinRoughness = 0.55;

  let keyIndex = 0;

  character.traverse((child: any) => {
    if (!child.isMesh) return;
    const mesh = child as THREE.Mesh;

    const name = (mesh.name || "").toLowerCase();
    const parentName = (mesh.parent?.name || "").toLowerCase();
    const matName = (mesh.material && !Array.isArray(mesh.material)
      ? mesh.material.name
      : ""
    ).toLowerCase();

    const matches = (keyword: string) => {
      const k = keyword.toLowerCase();
      return name.includes(k) || parentName.includes(k);
    };

    const setMat = (
      colorHex: string | number,
      roughness = 0.5,
      metalness = 0
    ) => {
      const orig = Array.isArray(mesh.material)
        ? mesh.material[0]
        : mesh.material;
      const mat = (orig
        ? orig.clone()
        : new THREE.MeshStandardMaterial()) as THREE.MeshStandardMaterial;

      mat.color.set(colorHex);
      mat.roughness = roughness;
      mat.metalness = metalness;
      mat.precision = "mediump";
      mat.needsUpdate = true;
      mesh.material = mat;
    };

    // 1. Face & Head Skin
    if (
      matches("plane007") ||
      matches("plane.007") ||
      matches("face")
    ) {
      setMat(skinColor, skinRoughness, 0);
    }
    // 2. Ears Skin
    else if (
      matches("ear001") ||
      matches("ear.001") ||
      matches("ear")
    ) {
      setMat(skinColor, skinRoughness, 0);
    }
    // 3. Neck Skin
    else if (matches("neck")) {
      setMat(skinColor, skinRoughness, 0);
    }
    // 4. Hands Skin
    else if (matches("hand")) {
      setMat(skinColor, skinRoughness, 0);
    }
    // 5. Hair
    else if (
      matches("hair") ||
      matches("ironpcube3004") ||
      matches("iron:pcube3.004")
    ) {
      setMat("#1c1917", 0.35, 0.1); // Styled espresso black with natural sheen
    }
    // 6. Eyebrows
    else if (matches("eyebrow")) {
      setMat("#18181b", 0.5, 0);
    }
    // 7. Shirt (BODY.SHIRT / BODYSHIRT)
    else if (
      matches("bodyshirt") ||
      matches("body.shirt") ||
      matches("shirt") ||
      (matches("cube002") && mesh.geometry?.attributes?.position?.count === 4514)
    ) {
      setMat("#2563eb", 0.45, 0.05); // Vibrant Electric Royal Blue
    }
    // 8. Pants
    else if (matches("pant")) {
      setMat("#1e293b", 0.65, 0.05); // Deep slate denim
    }
    // 9. Shoes
    else if (matches("shoe")) {
      setMat("#f8fafc", 0.35, 0.05); // Crisp street sneaker white
    }
    // 10. Soles
    else if (matches("sole")) {
      setMat("#0f172a", 0.7, 0); // Charcoal rubber sole
    }
    // 11. Chair (Cube.002 root)
    else if (
      matches("cube002") ||
      matches("cube.002") ||
      matches("cube007")
    ) {
      setMat("#18181b", 0.6, 0.1);
    }
    // 12. Desk / Table (Plane / Plane.009)
    else if (
      name === "plane" ||
      parentName === "plane" ||
      matches("plane009") ||
      matches("plane.009")
    ) {
      setMat("#2e1d13", 0.45, 0.05); // Rich dark walnut wood
    }
    // 13. Computer / Laptop
    else if (
      matches("plane002") ||
      matches("plane.002") ||
      matches("plane015")
    ) {
      setMat("#2a2e39", 0.25, 0.85); // Space Gray aluminum base
    } else if (
      matches("plane003") ||
      matches("plane.003") ||
      matches("plane016")
    ) {
      setMat("#383f4d", 0.3, 0.75); // Space Gray trackpad
    } else if (
      matches("plane004") ||
      matches("plane.004") ||
      matches("plane017")
    ) {
      // Preserve Material.027 for dynamic monitor screen illumination
      if (matName !== "material.027") {
        setMat("#222730", 0.3, 0.8); // Laptop display lid & bezel
      }
    }
    // 14. Keyboard & Keycaps
    else if (
      name === "keyboard" ||
      parentName === "keyboard" ||
      matches("cube011") ||
      matches("keys")
    ) {
      if (matches("keys")) {
        const keyMat = new THREE.MeshStandardMaterial({
          roughness: 0.4,
          metalness: 0.1,
          precision: "mediump",
        });
        if (keyIndex === 0 || keyIndex === 12) {
          keyMat.color.set("#06b6d4"); // Cyan accent (Esc / Enter)
        } else if (keyIndex % 5 === 0) {
          keyMat.color.set("#f59e0b"); // Warm amber modifiers
        } else {
          keyMat.color.set("#334155"); // Modern dark slate alphas
        }
        mesh.material = keyMat;
        keyIndex++;
      } else {
        setMat("#18181b", 0.5, 0.3); // Keyboard chassis
      }
    }
    // 15. Ground
    else if (matches("ground") || matches("plane014")) {
      setMat("#0b080c", 0.85, 0);
    }
    // 16. Glasses (Frames and Lenses)
    else if (matches("glasses") || matName.includes("glasses")) {
      if (Array.isArray(mesh.material)) {
        mesh.material = mesh.material.map((m: any) => {
          const mName = (m?.name || "").toLowerCase();
          if (mName.includes("lens")) {
            return new THREE.MeshPhysicalMaterial({
              color: "#e2e8f0",
              transparent: true,
              opacity: 0.3,
              roughness: 0.1,
              transmission: 0.9,
            });
          }
          return new THREE.MeshStandardMaterial({
            color: "#18181b",
            roughness: 0.3,
            metalness: 0.5,
          });
        });
      } else if (matName.includes("lens") || name.includes("lens")) {
        mesh.material = new THREE.MeshPhysicalMaterial({
          color: "#e2e8f0",
          transparent: true,
          opacity: 0.3,
          roughness: 0.1,
          transmission: 0.9,
        });
      } else {
        setMat("#18181b", 0.3, 0.5); // Sleek modern dark glasses frame
      }
    }
  });
};

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>((resolve, reject) => {
      try {
        let character: THREE.Object3D;
        loader.load(
          "/models/character.glb",
          async (gltf) => {
            character = gltf.scene;

            // Apply vibrant styling to every mesh: Face, Head, Ears, Shirt, Shoes, Table, Computer, Keyboard, Glasses
            applyVibrantStyling(character);

            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                child.castShadow = false;
                child.receiveShadow = false;
                mesh.frustumCulled = true;
                if (mesh.material && !Array.isArray(mesh.material)) {
                  (mesh.material as THREE.ShaderMaterial).precision = "mediump";
                }
              }
            });

            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();

            const footR = character.getObjectByName("footR");
            if (footR) footR.position.y = 3.36;

            const footL = character.getObjectByName("footL");
            if (footL) footL.position.y = 3.36;

            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            dracoLoader.dispose();
            reject(error);
          }
        );
      } catch (err) {
        dracoLoader.dispose();
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
