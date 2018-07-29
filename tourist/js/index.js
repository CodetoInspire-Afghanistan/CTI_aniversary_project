
			var table = [
				"Herat", "", "West",
				"Kabul", "", "center", 
				"Badghis", "", "north",
				"Konar", "", "east",
				"Badakhshan", "", "north",
				"Takhar", "", "north",
				"panjshir", "", "center",
				"Nurestan", "", "east",
				"Nangarhar", "", "east",
				"Laghman", "", "center",
				"Kapisa", "", "center",
				"Baghlan", "", "center",
				"Kunduz", "", "north",
				"Parvan", "", "center",
				"Logar", "", "east",
				"Paktika", "", "south",
				"Khust", "", "east",
				"Paktia", "", "east",
				"Ghazni", "", "center",
				"Wardak", "", "center",
				"Bamyan", "", "center",
				"Daykundi", "", "center",
				"Samangan", "", "north",
				"Balkh", "", "north",
				"jowzjan", "", "north",
				"Sare_Pol", "", "center",
				"Faryab", "", "north",
				"Ghor", "", "center",
				"Oruzgan", "", "center",
				"Zabul", "", "center",
				"Kandahar", "", "south",
				"Nimruz", "", "south",
				"Farah", "", "West",
				"Helmand", "", "south",
				"Herat", "", "West",
				"Kabul", "", "center", 
				"Badghis", "", "north",
				"Konar", "", "east",
				"Badakhshan", "", "West",
				"Takhar", "", "West",
				"panjshir", "", "West",
				"Nurestan", "", "West",
				"Nangarhar", "", "West",
				"Laghman", "", "West",
				"Kapisa", "", "West",
				"Baghlan", "", "West",
				"Kunduz", "", "West",
				"Parvan", "", "West",
				"Logar", "", "West",
				"Paktika", "", "West",
				"Khust", "", "West",
				"Paktia", "", "West",
				"Ghazni", "", "West",
				"Wardak", "", "West",
				"Bamyan", "", "West",
				"Daykundi", "", "West",
				"Samangan", "", "West",
				"Balkh", "", "West",
				"jowzjan", "", "West",
				"Sare_Pol", "", "West",
				"Faryab", "", "West",
				"Ghor", "", "West",
				"Oruzgan", "", "center",
				"Zabul", "", "center",
				"Kandahar", "", "West",
				"Nimruz", "", "West",
				"Farah", "", "West",
				"Helmand", "", "West",
				"Herat", "", "West",
				"Kabul", "", "West", 
				"Badghis", "", "West",
				"Konar", "", "West",
				"Badakhshan", "", "West",
				"Takhar", "", "West",
				"panjshir", "", "West",
				"Nurestan", "", "West",
				"Nangarhar", "", "West",
				"Laghman", "", "West",
				"Kapisa", "", "center",
				"Baghlan", "", "West",
				"Kunduz", "", "West",
				"Parvan", "", "West",
				"Logar", "", "West",
				"Paktika", "", "West",
				"Khust", "", "West",
				"Paktia", "", "West",
				"Ghazni", "", "West",
				"Wardak", "", "West",
				"Bamyan", "", "West",
				"Daykundi", "", "West",
				"Samangan", "", "West",
				"Balkh", "", "West",
				"jowzjan", "", "West",
				"Sare_Pol", "", "West",
				"Faryab", "", "West",
				"Ghor", "", "West",
				"Oruzgan", "", "West",
				"Zabul", "", "West",
				"Kandahar", "", "West",
				"Nimruz", "", "West",
				"Farah", "", "West",
				"Helmand", "", "West"
			];

			var camera, scene, renderer;
			var controls;

			var objects = [];
			var targets = {sphere: [] };

			init();
			animate();

			function init() {

				
				var mql = window.matchMedia("screen and (min-width: 500px)");
			if (mql.matches){ 
				camera = new THREE.PerspectiveCamera( 32, window.innerWidth / window.innerHeight, 1, 10000 );
				}
			else{
				camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 10000 );
				}

				

				camera.position.z = 3000;

				scene = new THREE.Scene();

				// table

				for ( var i = 0; i < table.length; i += 3 ) {

					var element = document.createElement( 'div' );
					element.className = 'element';

					if(table[i] == "Herat"){
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/Herat.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Herat-modal-lg");

						
					}
					else if(table[i] == "Kabul") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/Kabul.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Kabul-modal-lg");
						
					}
					else if(table[i] == "Badakhshan") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/Badakhshan.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Badakhshan-modal-lg");
					}
					else if(table[i] == "Takhar") {
					    element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/Takhar.png")';
					    element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Takhar-modal-lg");
					}
					else if(table[i] == "panjshir") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/panjshir.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Panjshir-modal-lg");
					}
					else if(table[i] == "Nurestan") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/Nurestanu.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Nurestan-modal-lg");
					}
					else if(table[i] == "Konar") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/Konar.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Konar-modal-lg");
					}
					else if(table[i] == "Nangarhar") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/Nangarhar.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Nangarhar-modal-lg");
					}
					else if(table[i] == "Laghman") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/Laghman.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Laghman-modal-lg");
					}
					else if(table[i] == "Kapisa") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/Kapisa.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Kapisa-modal-lg");
					}
					
					else if(table[i] == "Baghlan") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/Baghlan.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Baghlan-modal-lg");
					}
					else if(table[i] == "Kunduz") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/Kunduz.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Kunduz-modal-lg");
					}
					else if(table[i] == "Parvan") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/Parvan.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Parvan-modal-lg");
					}
					//logar.png
					else if(table[i] == "Logar") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/panjshir.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Logar-modal-lg");
					}
					else if(table[i] == "Paktika") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/Paktika.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Paktika-modal-lg");
					}
					//khust
					else if(table[i] == "Khust") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/khust.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Khust-modal-lg");
					}
					else if(table[i] == "Paktia") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/Paktia.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Paktia-modal-lg");
					}
					else if(table[i] == "Ghazni") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/Ghazni.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Ghazni-modal-lg");
					}
					else if(table[i] == "Wardak") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/Wardak.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Wardak-modal-lg");
					}
					else if(table[i] == "Bamyan") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/Bamyan.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Bamyan-modal-lg");
					}
					else if(table[i] == "Daykundi") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/Daykundi.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Daykundi-modal-lg");
					}
					else if(table[i] == "Samangan") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/Samangan.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Samangan-modal-lg");
					}
					else if(table[i] == "Balkh") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/Balkh.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Balkh-modal-lg");
					}
					else if(table[i] == "jowzjan") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/jowzjan.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Jowzjan-modal-lg");
					}
					else if(table[i] == "Sare_Pol") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/Sare_Pol.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Sare-pol-modal-lg");
					}
					else if(table[i] == "Faryab") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/Faryab.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Faryab-modal-lg");
					}
					else if(table[i] == "Ghor") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/Ghor.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Ghor-modal-lg");
					}
					else if(table[i] == "Oruzgan") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/Oruzgan.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Oruzgan-modal-lg");
					}
					else if(table[i] == "Zabul") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/Zabul.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Zabul-modal-lg");
					}
					else if(table[i] == "Kandahar") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/Kandahar.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Kandahar-modal-lg");
					}
					else if(table[i] == "Nimruz") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/Nimruz.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Nimruze-modal-lg");
					}
					else if(table[i] == "Farah") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/Farah.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Farah-modal-lg");
					}
					else if(table[i] == "Helmand") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/Helmand.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Helmand-modal-lg");
					}
					else if(table[i] == "Badghis") {
						element.style.background = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ') url("img/Badghis.png")';
						element.setAttribute("data-toggle", "modal");
						element.setAttribute("data-target", ".bs-Badghis-modal-lg");
					}

					var number = document.createElement( 'div' );
					number.className = 'number';
					number.textContent = (i/5) + 1;
					element.appendChild( number );

					//var symbol = document.createElement( 'div' );
					//symbol.className = 'symbol';
					//element.appendChild( symbol );

					var details = document.createElement( 'div' );
					details.className = 'details';
					details.innerHTML = table[ i + 1 ] + '<br>' + table[ i + 2 ];
					element.appendChild( details );

					var object = new THREE.CSS3DObject( element );
					object.position.x = Math.random() * 4000 - 2000;
					object.position.y = Math.random() * 4000 - 2000;
					object.position.z = Math.random() * 4000 - 2000;
					scene.add( object );

					objects.push( object );

					//

					var object = new THREE.Object3D();
					object.position.x = ( table[ i + 3 ] * 140 ) - 1260;
					object.position.y = - ( table[ i + 4 ] * 180 ) + 990;


				}

				// sphere

				var vector = new THREE.Vector3();

				for ( var i = 0, l = objects.length; i < l; i ++ ) {

					var phi = Math.acos( -1 + ( 2 * i ) / l );
					var theta = Math.sqrt( l * Math.PI ) * phi;

					var object = new THREE.Object3D();

					object.position.x = 800 * Math.cos( theta ) * Math.sin( phi );
					object.position.y = 800 * Math.sin( theta ) * Math.sin( phi );
					object.position.z = 800 * Math.cos( phi );

					vector.copy( object.position ).multiplyScalar( 2 );

					object.lookAt( vector );

					targets.sphere.push( object );

				}

				

				renderer = new THREE.CSS3DRenderer();
				renderer.setSize( 400, 400);
			if (mql.matches){ 
					renderer.setSize( 500, 500);
				}
			else{
					renderer.setSize( 260, 400);
				}
				//renderer.domElement.style.position = 'absolute';
				document.getElementById( 'con' ).appendChild( renderer.domElement );

				//

				controls = new THREE.TrackballControls( camera, renderer.domElement );
				controls.rotateSpeed = 0.5;
				controls.minDistance = 500;
				controls.maxDistance = 6000;
				controls.addEventListener( 'change', render );

				
				transform( targets.sphere, 2000 );

				//

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function transform( targets, duration ) {

				TWEEN.removeAll();

				for ( var i = 0; i < objects.length; i ++ ) {

					var object = objects[ i ];
					var target = targets[ i ];

					new TWEEN.Tween( object.position )
						.to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
						.easing( TWEEN.Easing.Exponential.InOut )
						.start();

					new TWEEN.Tween( object.rotation )
						.to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
						.easing( TWEEN.Easing.Exponential.InOut )
						.start();

				}

				new TWEEN.Tween( this )
					.to( {}, duration * 2 )
					.onUpdate( render )
					.start();

			}

			function onWindowResize() {
				render();
			}

			function animate() {

				requestAnimationFrame( animate );

				TWEEN.update();

				controls.update();

			}

			function render() {

				renderer.render( scene, camera );

			}