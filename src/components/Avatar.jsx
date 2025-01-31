/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 .\public\models\egyptian.glb 
*/

import React, { useEffect, useRef } from 'react'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import {useControls} from 'leva';

export function Avatar(props) {
  const {animation} = props;
  const {headFollow, cursorFollow} = useControls({
    headFollow: false,
    cursorFollow: false,
  });

  const group = useRef();

  const { nodes, materials } = useGLTF('models/egyptian.glb')

  const {animations : idleAnimation} = useFBX('animations/idle.fbx') 
  const {animations : talkAnimation} = useFBX('animations/talk.fbx') 
  const {animations : thankAnimation} = useFBX('animations/thank.fbx') 

  idleAnimation[0].name = 'idle';
  talkAnimation[0].name = 'talk';
  thankAnimation[0].name = 'thank';


  console.log(idleAnimation)

  const {actions} = useAnimations([idleAnimation[0],talkAnimation[0],thankAnimation[0]],group);

  useFrame((state)=>{
    if(headFollow){
      group.current.getObjectByName('Head').lookAt(state.camera.position);
    }
    if (cursorFollow){
      const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1);
      group.current.getObjectByName('Neck').lookAt(target);
      console.log(target)
    }
  });

  useEffect(()=>{
    actions[animation].reset().fadeIn(0.06).play();
    return () => {
      actions[animation].reset().stop();
    }
  },[animation]);
  
   return (
    <group {...props} ref={group} dispose={null}>
      <group rotation-x={-Math.PI/1.9}>
      <primitive object={nodes.Hips} />
      <skinnedMesh name="Wolf3D_Avatar" geometry={nodes.Wolf3D_Avatar.geometry} material={materials.Wolf3D_Avatar} skeleton={nodes.Wolf3D_Avatar.skeleton} morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences} />
    </group>
    </group>
  )
}

useGLTF.preload('models/egyptian.glb')
