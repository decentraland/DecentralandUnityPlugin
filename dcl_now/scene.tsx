import * as DCL from 'decentraland-api'

// This is an interface, you can use it to enforce the types of your state
export interface IState {
  isDoorClosed: boolean
}

export default class UnityScene extends DCL.ScriptableScene<any, IState> {
  async render() {

    return (
      <scene position={{x:5,y:0,z:5}}>
        <entity position={{x:0,y:1,z:-10}} scale={{x:1,y:1,z:1}} rotation={{x:0,y:0,z:0}}></entity>
        <gltf-model position={{x:0,y:0,z:0}} scale={{x:1,y:1,z:1}} rotation={{x:0,y:0,z:0}} src="./unity_assets/Tree.gltf"></gltf-model>
        <entity position={{x:0,y:3,z:0}} scale={{x:1,y:1,z:1}} rotation={{x:50,y:330,z:0}}></entity>
        <entity position={{x:0,y:0,z:0}} scale={{x:1,y:1,z:1}} rotation={{x:0,y:0,z:0}}></entity>
        <box position={{x:-1.24,y:3.120024,z:-3.26}} scale={{x:1,y:1,z:1}} rotation={{x:0,y:0,z:0}} withCollisions={true}></box>
      </scene>
    )
  }
}
