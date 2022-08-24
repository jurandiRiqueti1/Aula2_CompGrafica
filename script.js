const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			const geometry = new THREE.BoxGeometry( 1, 1, 1 );
			const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			const cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			const geometry3 = new THREE.RingGeometry( 11, 10, 10 );
			const material3 = new THREE.MeshBasicMaterial( { color: 0x00ff00, side: THREE.DoubleSide } );
			const mesh = new THREE.Mesh( geometry3, material3 );
			scene.add( mesh );

            const geometry2 = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
            const material2 = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
            const capsule = new THREE.Mesh( geometry2, material2 );
            scene.add( capsule );

			camera.position.z = 20;

			mesh.position.x = 10;

            capsule.position.x = 2;
            capsule.rotation.x = 2;

			function animate() {
				requestAnimationFrame( animate );
                
				mesh.rotation.z += 0.01;
				mesh.rotation.x += 0.01;

                capsule.rotation.z += 0.01;

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer.render( scene, camera );
			};

			animate();