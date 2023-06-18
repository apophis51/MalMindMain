import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';  
function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  );
}
export default function App() {
    return <Canvas>
        <OrbitControls />
        <Box /></Canvas>;
}