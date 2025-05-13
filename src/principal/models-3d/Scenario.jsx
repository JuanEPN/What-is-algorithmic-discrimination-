import { useGLTF } from '@react-three/drei'

const Scenario = (props)=>{
  const { nodes, materials } = useGLTF("/models-3d/scenario.glb"); 
  return (
    <group {...props} dispose={null} scale={[5, 5, 5]} position={[-20, -20, -20]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[0, -1, 0]} scale={[0.1, 0, 0.1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Floor_0.geometry}
            material={materials.Floor_alt1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Floor_1.geometry}
            material={materials.Floor_alt2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Floor_2.geometry}
            material={materials.Floor_alt3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Floor_3.geometry}
            material={materials.Floor_alt4}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Floor_4.geometry}
            material={materials.Floor_alt5}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Floor_5.geometry}
            material={materials.material}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Landscape_0.geometry}
          material={materials['Material.002']}
          position={[3.5, -3.4, 3.8]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Landscape_plane_0.geometry}
          material={materials['Material.001']}
          position={[3.5, -3.4, 3.8]}
        />
      </group>
    </group>
  )
}

useGLTF.preload("/models-3d/scenario.glb"); 
export default Scenario; 