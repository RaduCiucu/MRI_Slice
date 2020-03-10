			var container;
			var camera, scene, renderer, effect, controls;
			var mesh, lightMesh, geometry;
			var spheres = [];
			var directionalLight, pointLight;
			var mouseX = 0, mouseY = 0;
			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;
			document.addEventListener( 'mousemove', onDocumentMouseMove, false );
			init();
			animate();

			function init() {
        var slices = [
					'Slicer/1.png',
'Slicer/2.png',
'Slicer/3.png',
'Slicer/4.png',
'Slicer/5.png',
'Slicer/6.png',
'Slicer/7.png',
'Slicer/8.png',
'Slicer/9.png',
'Slicer/10.png',
'Slicer/11.png',
'Slicer/12.png',
'Slicer/13.png',
'Slicer/14.png',
'Slicer/15.png',
'Slicer/16.png',
'Slicer/17.png',
'Slicer/18.png',
'Slicer/19.png',
'Slicer/20.png',
'Slicer/21.png',
'Slicer/22.png',
'Slicer/23.png',
'Slicer/24.png',
'Slicer/25.png',
'Slicer/26.png',
'Slicer/27.png',
'Slicer/28.png',
'Slicer/29.png',
'Slicer/30.png',
'Slicer/31.png',
'Slicer/32.png',
'Slicer/33.png',
'Slicer/34.png',
'Slicer/35.png',
'Slicer/36.png',
'Slicer/37.png',
'Slicer/38.png',
'Slicer/39.png',
'Slicer/40.png',
'Slicer/41.png',
'Slicer/42.png',
'Slicer/43.png',
'Slicer/44.png',
'Slicer/45.png',
'Slicer/46.png',
'Slicer/47.png',
'Slicer/48.png',
'Slicer/49.png',
'Slicer/50.png',
'Slicer/51.png',
'Slicer/52.png',
'Slicer/53.png',
'Slicer/54.png',
'Slicer/55.png',
'Slicer/56.png',
'Slicer/57.png',
'Slicer/58.png',
'Slicer/59.png',
'Slicer/60.png',
'Slicer/61.png',
'Slicer/62.png',
'Slicer/63.png',
'Slicer/64.png',
'Slicer/65.png',
'Slicer/66.png',
'Slicer/67.png',
'Slicer/68.png',
'Slicer/69.png',
'Slicer/70.png',
'Slicer/71.png'
    		];
				container = document.createElement( 'div' );
				document.body.appendChild( container );
				camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 100000 );
				camera.position.set(50, 200, 100);
				scene = new THREE.Scene();
        geometry = new THREE.PlaneBufferGeometry( 200, 200, 1, 1 );
        var scans = new THREE.Object3D();
				var loader = new THREE.TextureLoader();
        for (var i = 1; i < 71; i++) {
          map =  loader.load(slices[i]);
          material = new THREE.MeshBasicMaterial( { map: map, side: THREE.DoubleSide } );
          material.opacity = 0.025;
          material.transparent = true;
          mesh = new THREE.Mesh( geometry, material );
          mesh.rotation.x = 0;
          mesh.position.set(0, 0 + i * 0, 0 + i* -2);
          scans.add( mesh );
					scene.add( scans );
				}
				renderer = new THREE.WebGLRenderer();
				renderer.setClearColor(0xffffff );
				renderer.setPixelRatio( window.devicePixelRatio );
				controls = new THREE.TrackballControls( camera );
				controls.rotateSpeed = 1.0;
				controls.zoomSpeed = 1.2;
				controls.panSpeed = 0.8;
				controls.noZoom = false;
				controls.noPan = false;
				controls.staticMoving = true;
				controls.dynamicDampingFactor = 0.3;
				controls.keys = [ 65, 83, 68 ];
				controls.addEventListener( 'change', render );
				container.appendChild( renderer.domElement );
				renderer.setSize( window.innerWidth, window.innerHeight );
				window.addEventListener( 'resize', onWindowResize, false );
			}
			function onWindowResize() {
				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}
			function onDocumentMouseMove( event ) {
				mouseX = ( event.clientX - windowHalfX ) * 10;
				mouseY = ( event.clientY - windowHalfY ) * 10;
			}
			function animate() {
				requestAnimationFrame( animate );
				controls.update();
				render();
			}
			function render() {
				var timer = 0.0001 * Date.now();
				camera.lookAt( scene.position );
				for ( var i = 0, il = spheres.length; i < il; i ++ ) {
					var sphere = spheres[ i ];
					sphere.position.x = 5000 * Math.cos( timer + i );
					sphere.position.y = 5000 * Math.sin( timer + i * 1.1 );
				}
				renderer.render( scene, camera);
			}