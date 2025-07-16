import TechScene3D from "./TechScene3D";

// Example showing how to use GLB models with the 3D scene
export default function GLBExample() {
  return (
    <div className="space-y-8">
      {/* Example 1: Default built-in model */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Default Built-in Model</h3>
        <div className="h-[400px] border rounded-lg">
          <TechScene3D />
        </div>
      </div>

      {/* Example 2: Custom GLB model (uncomment when you have a .glb file) */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Custom GLB Model</h3>
        <div className="h-[400px] border rounded-lg">
          {/* 
          To use this, add your .glb file to public/models/ folder and uncomment:
          <TechScene3D glbModelUrl="/models/laptop.glb" />
          */}
          <TechScene3D />
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Add your .glb file to <code>public/models/</code> and uncomment the
          line above
        </p>
      </div>

      {/* Instructions */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="font-semibold mb-3">How to Add Your GLB Model:</h4>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>
            Download a .glb 3D model file (try Sketchfab, Free3D, or Kenney
            Assets)
          </li>
          <li>
            Place the .glb file in the <code>public/models/</code> directory
          </li>
          <li>
            Update your component to use:{" "}
            <code>
              &lt;TechScene3D glbModelUrl="/models/your-file.glb" /&gt;
            </code>
          </li>
          <li>Adjust scale, position, and rotation as needed</li>
        </ol>

        <div className="mt-4 p-3 bg-blue-50 rounded border-l-4 border-blue-400">
          <p className="text-sm text-blue-700">
            <strong>Tip:</strong> Keep GLB files under 5MB for good performance.
            The component automatically falls back to the built-in model if the
            GLB fails to load.
          </p>
        </div>
      </div>
    </div>
  );
}
