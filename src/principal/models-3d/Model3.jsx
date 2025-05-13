import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Model3 = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/modelo3.glb")
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.geometry_0.geometry}
        material={materials.Material_0}
      />
    </group>
  )
}

useGLTF.preload("/models-3d/modelo3.glb"); 

export default Model3;
