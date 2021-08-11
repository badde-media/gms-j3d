// J3D GLTF LOAD
function j3d_gltf_load(pathToModel, scene) {
    
    import { GLTFLoader } from 'GLTFLoader.js';
    
    const loader = new GLTFLoader();

    loader.load( pathToModel, function ( gltf ) {

        scene.add( gltf.scene );

    }, undefined, function ( error ) {

        console.error( error );

    } );
}