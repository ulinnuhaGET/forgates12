# 3D Models Directory

Place your .glb or .gltf files in this directory to use them in the 3D scene.

## How to Use GLB Models

1. **Add your .glb file** to this `public/models/` directory
2. **Update TechScene3D.tsx** to load your model:

```typescript
// In TechScene3D.tsx, replace the TechModel with:
<GLBModel
  url="/models/your-model-name.glb"
  scale={2}
  position={[0, 0, 0]}
  rotation={[0, 0, 0]}
/>
```

## GLB Model Properties

- **url**: Path to your .glb file (must start with `/models/`)
- **scale**: Size multiplier (1 = original size)
- **position**: [x, y, z] coordinates
- **rotation**: [x, y, z] rotation in radians

## Recommended 3D Models

You can find free GLB models at:

- [Sketchfab](https://sketchfab.com/3d-models?features=downloadable&sort_by=-likeCount)
- [Google Poly](https://poly.google.com/) (archived but still accessible)
- [Kenney Assets](https://kenney.nl/assets)
- [Free3D](https://free3d.com/3d-models/glb)

## Performance Tips

- Keep model file size under 5MB for good performance
- Use compressed textures when possible
- Consider the polygon count (under 10k triangles recommended)
- Test on mobile devices for performance

## Example Models for Tech Theme

Good model types for a tech/coding website:

- Laptops or computers
- Code editors
- Circuit boards
- Tech gadgets
- Abstract geometric shapes
- Futuristic objects
