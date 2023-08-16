/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 .\public\models\egyptian.glb 
*/

import React, { useEffect, useRef } from 'react'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import {useControls} from 'leva';

export function Avatar(props) {
  const {headFollow, cursorFollow} = useControls({
    headFollow: false,
    cursorFollow: false,
  });

  const group = useRef();

  const { nodes, materials } = useGLTF('models/egyptian.glb')

  const {animations : idleAnimation} = useFBX('animations/idle.fbx') 
  
  idleAnimation[0].name = 'idle';

  console.log(idleAnimation)
  const {actions} = useAnimations(idleAnimation,group);

  useFrame((state)=>{
    if(headFollow){
      group.current.getObjectByName('Head').lookAt(state.camera.position);
    }
    if (cursorFollow){
      const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 0);
      group.current.getObjectByName('Neck').lookAt(target);
    }
  });

  useEffect(()=>{
    actions['idle'].reset().play();
  },[]);
  
   return (
    <group {...props} ref={group} dispose={null}>
      <group rotation-x={-Math.PI/2}>
      <primitive object={nodes.Hips} />
      <skinnedMesh name="Wolf3D_Avatar" geometry={nodes.Wolf3D_Avatar.geometry} material={materials.Wolf3D_Avatar} skeleton={nodes.Wolf3D_Avatar.skeleton} morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences} />
    </group>
    </group>
  )
}

useGLTF.preload('models/egyptian.glb')
