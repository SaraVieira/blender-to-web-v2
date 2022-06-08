import React, { useRef } from "react";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useFrosting } from ".";
import { MeshStandardMaterial } from "three";

function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/cupcake.gltf");
  const { frosting } = useFrosting();

  useFrame((state) => {
    const { position, rotation } = group.current;
    const sin = Math.sin(state.clock.elapsedTime);
    position.y += sin / 50;
    rotation.x += sin / 650;
    rotation.y += sin / 650;
    rotation.z += sin / 650;
  });

  const frostingMaterial = new MeshStandardMaterial({
    ...materials.frosting,
    color: frosting.color,
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cupcake.geometry}
        material={materials.cupcake}
        position={[0, 14.01, 0]}
      >
        <group position={[0, -3.51, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle.geometry}
            material={materials.whitePaper}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_1.geometry}
            material={materials.yellowPaper}
          />
        </group>

        {frosting.id !== 4 && (
          <>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.frosting.geometry}
              material={frostingMaterial}
              position={[0, 1.09, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles.geometry}
              material={materials.sprinkles}
              position={[1.25, 3.05, 2.05]}
            />
          </>
        )}
      </mesh>
    </group>
  );
}

const Side = () => {
  const orbitControlsRef = useRef();
  return (
    <Canvas shadows>
      <Stage
        contactShadow={{
          opacity: 0.5,
          position: [0, -2, 0],
        }}
        environment="night"
        controls={orbitControlsRef}
      >
        <Model />
        <OrbitControls ref={orbitControlsRef} />
      </Stage>
    </Canvas>
  );
};

export default Side;
useGLTF.preload("/cupcake.gltf");
