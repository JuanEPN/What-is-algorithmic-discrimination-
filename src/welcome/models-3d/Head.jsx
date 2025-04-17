import { useGLTF } from '@react-three/drei'

const Head  = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/headModel.glb'); 

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_5c849070-a24d-41e5-81db-d0faeeea73aa'].geometry}
        material={materials['tripo_material_5c849070-a24d-41e5-81db-d0faeeea73aa']}
        scale={4.5}
      />
    </group>
  )
}

useGLTF.preload("/models-3d/headModel.glb"); 

export default Head;