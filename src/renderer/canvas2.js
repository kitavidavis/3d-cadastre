import React from 'react'
import { Engine, Scene } from 'react-babylonjs'
import { Vector3, Color3, Color4 } from '@babylonjs/core/Maths/math'
import {
    ActionIcon,
    AppShell,
    Navbar,
    useMantineTheme,
  } from '@mantine/core';

export default { title: 'Dynamic Terrain' };

const xSize = 500
const zSize = 500
const subSize = 150

const getMapData = () => {
  let mapSubX = xSize
  let mapSubZ = zSize

  // map creation
  let mapData = new Float32Array(mapSubX * mapSubZ * 3)
  for (var l = 0; l < mapSubZ; l++) {
    for (var w = 0; w < mapSubX; w++) {
      mapData[3 * (l * mapSubX + w)] = (w - mapSubX * 0.5) * 2.0
      mapData[3 * (l * mapSubX + w) + 1] = w / (l + 1)
      mapData[3 * (l * mapSubX + w) + 2] = (l - mapSubZ * 0.5) * 2.0
    }
  }
  return mapData
}

const WithDynamicTerrain = () => (
  <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
    <Scene clearColor={new Color4(0.0, 0.0, 0.0, 1.0)}>
      <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
      <freeCamera name='camera1' position={new Vector3(-50, 10, 0)} setTarget={[new Vector3(-20, 0, 0)]} />
      <dynamicTerrain name='ContinuousTerrain' mapData={getMapData()} mapSubX={xSize} mapSubZ={zSize} terrainSub={subSize} position={new Vector3(0, 0, 0)}>
        <standardMaterial name='terrain-material' diffuseColor={Color3.Green()} assignTo='mesh.material' wireframe={true} />
      </dynamicTerrain>
    </Scene>
  </Engine>
)


export const DynamicTerrain = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <WithDynamicTerrain />
  </div>
)