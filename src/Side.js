import React, { useRef } from "react";
import { Stage, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { wobble } from "./utils/animations";

function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/cupcake_01.gltf");

  useFrame((state) => {
    const { position, rotation } = group.current;
    position.y += wobble(state) / 1200;
    rotation.x += wobble(state) / 2000;
    rotation.y += wobble(state) / 1000;
    rotation.z += wobble(state) / 1000;
  });


  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cupcake.geometry}
        material={materials["Material.003"]}
        position={[0, 14.01, 0]}
      ><>
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles002.geometry}
              material={nodes.sprinkles002.material}
              position={[2.14, 2.96, -1.33]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles004.geometry}
              material={nodes.sprinkles004.material}
              position={[2.92, 2.21, 0.22]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles007.geometry}
              material={nodes.sprinkles007.material}
              position={[1.39, 3.41, -1.72]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles011.geometry}
              material={nodes.sprinkles011.material}
              position={[2.59, 2.63, -0.68]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles014.geometry}
              material={nodes.sprinkles014.material}
              position={[0.23, 5.41, -0.28]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles016.geometry}
              material={nodes.sprinkles016.material}
              position={[0.03, 2.3, -2.86]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles019.geometry}
              material={nodes.sprinkles019.material}
              position={[0.03, 5.09, -0.74]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles022.geometry}
              material={nodes.sprinkles022.material}
              position={[-2.21, 3.16, -0.82]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles026.geometry}
              material={nodes.sprinkles026.material}
              position={[-1.94, 3.67, 0.61]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles028.geometry}
              material={nodes.sprinkles028.material}
              position={[-1.17, 3.57, 1.72]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles032.geometry}
              material={nodes.sprinkles032.material}
              position={[-1.75, 3.14, 1.88]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles036.geometry}
              material={nodes.sprinkles036.material}
              position={[-0.3, 3.06, 2.48]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles040.geometry}
              material={nodes.sprinkles040.material}
              position={[0.5, 4.63, 1.15]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles044.geometry}
              material={nodes.sprinkles044.material}
              position={[1.92, 2, 2.56]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles.geometry}
              material={nodes.sprinkles.material}
              position={[1.25, 3.05, 2.05]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles001.geometry}
              material={nodes.sprinkles001.material}
              position={[1.74, 4.09, 0.2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles003.geometry}
              material={nodes.sprinkles003.material}
              position={[2.33, 3.3, -0.13]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles005.geometry}
              material={nodes.sprinkles005.material}
              position={[2.4, 2.73, 1.09]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles006.geometry}
              material={nodes.sprinkles006.material}
              position={[1.82, 3.78, -0.77]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles008.geometry}
              material={nodes.sprinkles008.material}
              position={[0.96, 4.75, -0.15]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles009.geometry}
              material={nodes.sprinkles009.material}
              position={[0.98, 4.41, -0.88]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles010.geometry}
              material={nodes.sprinkles010.material}
              position={[0.36, 4.13, -1.55]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles012.geometry}
              material={nodes.sprinkles012.material}
              position={[1.04, 2.89, -2.26]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles013.geometry}
              material={nodes.sprinkles013.material}
              position={[2.29, 2.15, -1.94]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles015.geometry}
              material={nodes.sprinkles015.material}
              position={[-0.87, 3.73, -1.89]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles017.geometry}
              material={nodes.sprinkles017.material}
              position={[-0.04, 3.16, -2.51]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles018.geometry}
              material={nodes.sprinkles018.material}
              position={[-0.9, 4.63, -0.65]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles020.geometry}
              material={nodes.sprinkles020.material}
              position={[-0.42, 5.37, 0.09]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles021.geometry}
              material={nodes.sprinkles021.material}
              position={[-1.59, 4.18, -0.2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles023.geometry}
              material={nodes.sprinkles023.material}
              position={[-2.92, 2.38, 0.57]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.frosting.geometry}
              material={materials["Material.001"]}
              position={[0, 1.09, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles024.geometry}
              material={nodes.sprinkles024.material}
              position={[-2.57, 2.57, -1.24]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles025.geometry}
              material={nodes.sprinkles025.material}
              position={[-1.4, 3.24, -1.78]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles027.geometry}
              material={nodes.sprinkles027.material}
              position={[-1.05, 4.5, 0.69]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles029.geometry}
              material={nodes.sprinkles029.material}
              position={[-2.22, 2.9, 1.42]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles033.geometry}
              material={nodes.sprinkles033.material}
              position={[-3.34, 2.03, -0.08]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles031.geometry}
              material={nodes.sprinkles031.material}
              position={[-1.66, 2.37, 2.52]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles030.geometry}
              material={nodes.sprinkles030.material}
              position={[-2.65, 1.95, 1.96]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles037.geometry}
              material={nodes.sprinkles037.material}
              position={[-0.61, 1.85, 3.42]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles035.geometry}
              material={nodes.sprinkles035.material}
              position={[-0.12, 5.14, 0.61]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles034.geometry}
              material={nodes.sprinkles034.material}
              position={[-0.24, 4.06, 1.76]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles041.geometry}
              material={nodes.sprinkles041.material}
              position={[1.09, 4.07, 1.41]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles039.geometry}
              material={nodes.sprinkles039.material}
              position={[0, 3.77, 1.97]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles038.geometry}
              material={nodes.sprinkles038.material}
              position={[0.7, 2.38, 2.96]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles043.geometry}
              material={nodes.sprinkles043.material}
              position={[2.39, 2.32, 1.82]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles042.geometry}
              material={nodes.sprinkles042.material}
              position={[1.9, 3.46, 1.23]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sprinkles045.geometry}
              material={nodes.sprinkles045.material}
              position={[3.25, 1.73, 1.13]}
            />
          </group>
          <group position={[0, -3.51, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle_1.geometry}
              material={materials["Material.004"]}
            />
          </group>
        </>

      </mesh>
    </group >
  );
}

const Side = () => {
  return (
    <Canvas shadows>
      <Stage
        contactShadow={{
          opacity: .5,
          position: [0, -2, 0],
        }}
        environment="night"
      >
        <Model />
      </Stage>
    </Canvas>
  )
};

export default Side;
useGLTF.preload("/cupcake_01.gltf");
