// J3D GLTF LOAD
function j3d_gltf_load(pathToModel, scene) {
   
    
    let loader = new GLTFLoader();

    loader.load( pathToModel, function ( gltf ) {

        scene.add( gltf.scene );

    }, undefined, function ( error ) {

        console.error( error );

    } );
}