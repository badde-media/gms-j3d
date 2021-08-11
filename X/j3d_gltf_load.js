// J3D GLTF LOAD
import { GLTFLoader } from 'GLTFLoader.js';

function j3d_gltf_load(pathToModel, scene) {
    const loader = new GLTFLoader();

    loader.load( pathToModel, function ( gltf ) {

        scene.add( gltf.scene );

    }, undefined, function ( error ) {

        console.error( error );

    } );
}