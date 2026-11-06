export const VERT = `#version 300 es
in vec2 aPos;
out vec2 vUv;
void main() {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}`;

export const CHUNKS = [
  {
    explanation:
      "Everything is derived from three inputs: the canvas size, the cursor position (0 to 1, eased on the CPU so it glides instead of snapping), and time. The output is premultiplied alpha so the page behind shows through.",
    code: `#version 300 es
precision highp float;

in vec2 vUv;
out vec4 fragColor;

uniform vec2 uRes;
uniform vec2 uMouse;
uniform float uTime;`,
  },
  {
    explanation:
      "Value noise built from a hash, summed over five octaves (fbm). Each octave doubles the frequency and halves the amplitude. The rotation matrix stops the octaves lining up with the lattice, which is what hides the grid and keeps the terrain organic.",
    code: `float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 rot = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = rot * p;
    a *= 0.5;
  }
  return v;
}`,
  },
  {
    explanation:
      "Space is aspect-corrected so contours stay round on any screen. Two noise fields drift in opposite directions and are used to bend the coordinates before the final height lookup (domain warping). That feedback is what gives the flowing, eroded look, at the cost of three fbm calls per pixel.",
    code: `void main() {
  float aspect = uRes.x / uRes.y;
  vec2 p = (vUv - 0.5) * vec2(aspect, 1.0) * 2.4;
  vec2 m = (uMouse - 0.5) * vec2(aspect, 1.0) * 2.4;
  float t = uTime * 0.05;

  // domain warp, then height
  vec2 q = vec2(fbm(p + vec2(0.0, t)), fbm(p + vec2(5.2, 1.3) - vec2(t, 0.0)));
  float h = fbm(p + 1.7 * q + vec2(t * 0.6));`,
  },
  {
    explanation:
      "The cursor adds a Gaussian bump to the height field. Because the lines are derived from height, they bend around it with no extra geometry and no special-case code.",
    code: `  // cursor hill
  vec2 dm = p - m;
  h += 0.32 * exp(-dot(dm, dm) * 3.0);`,
  },
  {
    explanation:
      "Scaling height by 16 and measuring the distance to the nearest integer gives 16 contour levels. Dividing by fwidth (how fast f changes per pixel) turns that distance into pixels, so every line has the same screen-space width and stays crisp without MSAA. Every fifth line is a brighter index contour, like on a topographic map.",
    code: `  // iso-contours, anti-aliased with screen-space derivatives
  float f = h * 16.0;
  float g = abs(fract(f - 0.5) - 0.5) / max(fwidth(f), 1e-4);
  float line = 1.0 - smoothstep(0.0, 1.4, g);
  float major = step(mod(floor(f + 0.5), 5.0), 0.5); // every 5th line

  float glow = smoothstep(0.5, 0.95, h) * 0.22;`,
  },
  {
    explanation:
      "An elliptical mask fades the field out so the canvas has no visible rectangle. The result is premultiplied (rgb already scaled by intensity), so the background grid shows through wherever there is no line.",
    code: `  // soft elliptical fade so there is no hard rectangle edge
  float mask = 1.0 - smoothstep(0.3, 0.95, length((vUv - 0.5) * 2.0));

  float intensity = clamp((line * (0.35 + 0.65 * major) + glow) * mask, 0.0, 1.0);

  vec3 accent = vec3(0.976, 0.451, 0.086); // #f97316
  vec3 col = mix(accent, vec3(1.0, 0.86, 0.72), major * 0.45);

  fragColor = vec4(col * intensity, intensity); // premultiplied
}`,
  },
];

export const FRAG = CHUNKS.map((c) => c.code.trim()).join("\n\n");
