<!--<script src="https://threejs.org/build/three.min.js"></script><!--r83-->
<script src="https://threejs.org/examples/js/controls/OrbitControls.js"></script>
<script src="https://cdn.rawgit.com/mrdoob/three.js/master/examples/js/loaders/GLTFLoader.js"></script>
-->
var script = document.createElement('script');
script.onload = function () {
    
};

document.head.appendChild(script);
script.src = 'https://cdn.rawgit.com/mrdoob/three.js/master/examples/js/loaders/GLTFLoader.js';
script.src = 'https://threejs.org/examples/js/controls/OrbitControls.js';
script.src = 'https://threejs.org/build/three.min.js';

<script >
	var camera = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 1, 100);
	camera.position.set(15, 15, -20);

	var scene = new THREE.Scene();
	const loadManager = new THREE.LoadingManager();
	const loader = new THREE.TextureLoader(loadManager); 	
	const light = new THREE.DirectionalLight( 0xdddddd, 1, 100 );
light.position.set( 50, 100, 50 ); //default; light shining from top
light.castShadow = true; // default false
scene.add( light );
light.shadow.mapSize.width = 512; // default
light.shadow.mapSize.height = 512; // default
light.shadow.camera.near = 0.5; // default
light.shadow.camera.far = 500; // default

function start()
{

scene.background = new THREE.Color( 0xdddddd );
var renderer = renderer = new THREE.WebGLRenderer({
	antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function resizeRendererToDisplaySize(renderer) {
	const canvas = renderer.domElement;
	const width = canvas.clientWidth;
	const height = canvas.clientHeight;
	const needResize = canvas.width !== width || canvas.height !== height;
	if (needResize) {
		renderer.setSize(width, height, false);
	}
	return needResize;
}
function render(time) {
	time *= 0.001;

	if (resizeRendererToDisplaySize(renderer)) {
		const canvas = renderer.domElement;
		camera.aspect = canvas.clientWidth / canvas.clientHeight;
		camera.updateProjectionMatrix();
	}

	cubes.forEach((cube, ndx) => {
		const speed = .2 + ndx * .1;
		const rot = time * speed;
		cube.rotation.x = rot;
		cube.rotation.y = rot;
	});

	renderer.render(scene, camera);

	requestAnimationFrame(render);
}

requestAnimationFrame(render);



var controls = new THREE.OrbitControls(camera, renderer.domElement);

controls.maxPolarAngle = Math.PI / 2;




{
	const width = 4;  
	const height = 0.5;  
	const depth = 4;  
	const terelka = new THREE.BoxBufferGeometry(width, height, depth);
	const material = [
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/doska.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/doska.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/doska.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/doska.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/doska.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/doska.jpg')})];
	var mesh3 = new THREE.Mesh(terelka, material);
	mesh3.position.x = 0;
	mesh3.position.y = 0.5;
	mesh3.position.z = 0;
	scene.add(mesh3);
}
{
	const width = 0.5;  
	const height = 0.25;  
	const depth = 4;  
	const noga = new THREE.BoxBufferGeometry(width, height, depth);
	const material = [
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/doska.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/doska.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/doska.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/doska.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/doska.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/doska.jpg')})];
	var mesh4 = new THREE.Mesh(noga, material);
	mesh4.position.x = 1.5;
	mesh4.position.y = 0.13;
	mesh4.position.z = 0;
	scene.add(mesh4);
}
{
	const width = 0.5;  
	const height = 0.25;  
	const depth = 4;  
	const noga2 = new THREE.BoxBufferGeometry(width, height, depth);
	const material = [
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/doska.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/doska.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/doska.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/doska.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/doska.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/doska.jpg')})];
	var mesh5 = new THREE.Mesh(noga2, material);
	mesh5.position.x = -1.5;
	mesh5.position.y = 0.13;
	mesh5.position.z = 0;
	scene.add(mesh5);
}
{
	const width = 0.1;  
	const height = 0.1;  
	const depth = 5.5;  
	const noga = new THREE.BoxBufferGeometry(width, height, depth);
	const material = [
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/wood.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/wood.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/wood.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/wood.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/wood.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/wood.jpg')})];	
	var mesh4 = new THREE.Mesh(noga, material);
	mesh4.position.x = -0.7;
	mesh4.position.y = 0.8;
	mesh4.position.z = -0.5;
	mesh4.rotation.y = -45 * Math.PI / 180;
	scene.add(mesh4);
}
{
	const width = 0.1;  
	const height = 0.1;  
	const depth = 5.5;  
	const noga = new THREE.BoxBufferGeometry(width, height, depth);
	const material = [
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/wood.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/wood.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/wood.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/wood.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/wood.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/wood.jpg')})];
	var mesh4 = new THREE.Mesh(noga, material);
	mesh4.position.x = -0.7;
	mesh4.position.y = 0.8;
	mesh4.position.z = -0.2;
	mesh4.rotation.y = -45 * Math.PI / 180;
	scene.add(mesh4);
}


function animate() {
	requestAnimationFrame(animate);
	controls.update();
	renderer.render(scene, camera);
}

animate();
}

function roll2()
{
	scene.clear(); 
	
}
</script>

<script>
	function ogr(){
		
{
const radiusTop = 0.25;  
const radiusBottom = 0.25;  
const height = 1.01;  
const radialSegments = 50;  
const heightSegments = 10;  
const openEnded = false;  
const thetaStart = Math.PI * 0.62;  
const thetaLength = Math.PI * 1.00;  
const geometry = new THREE.CylinderBufferGeometry(
    radiusTop, radiusBottom, height,
    radialSegments, heightSegments,
    openEnded,
    thetaStart, thetaLength);
	const cilinder1 = new THREE.CylinderBufferGeometry(
		radiusTop, radiusBottom, height, radialSegments);
	const material = [
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/ogr.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/ogr.jpg')}),];
	var mesh2 = new THREE.Mesh(geometry, material);
	mesh2.position.x = 0.2;
	mesh2.position.y = 1;
	mesh2.position.z = 0.2;
	scene.add(mesh2);
}

	}
</script>

<script>
	function ugr1(){		
{
	const radiusTop = 0.25;
	const radiusBottom = 0.25;
	const height = 1.01;
	const radialSegments = 100;
	const geometry = new THREE.CylinderBufferGeometry(
		radiusTop, radiusBottom, height, radialSegments);
	const material = [
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/ugr.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/ugr.jpg')}),];
	var mesh2 = new THREE.Mesh(geometry, material);
	mesh2.position.x = 0.2;
	mesh2.position.y = 1;
	mesh2.position.z = 0.2;
	scene.add(mesh2);
}

	}
</script>

<script>
	function fish1(){
		{
	const radiusTop = 0.51;
	const radiusBottom = 0.51;
	const height = 1;
	const radialSegments = 100;
	const heightSegments =  3;
	const openEnded = true;
	const thetaStart = Math.PI * 2;
	const thetaLength = Math.PI * 2.00;
	const material = [
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/fish.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/fish.jpg')}),];
	const geometry = new THREE.CylinderBufferGeometry(
		radiusTop, radiusBottom, height,
		radialSegments, heightSegments,
		openEnded,
		thetaStart, thetaLength);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.x = 0.2;
	mesh.position.y = 1;
	mesh.position.z = 0.2;
	scene.add(mesh);
}

	}
</script>

<script>
	function icra(){
		{
	const radiusTop = 0.51;
	const radiusBottom = 0.51;
	const height = 1;
	const radialSegments = 100;
	const heightSegments =  3;
	const openEnded = true;
	const thetaStart = Math.PI * 2;
	const thetaLength = Math.PI * 2.00;
	const material = [
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/icra.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/icra.jpg')}),];
	const geometry = new THREE.CylinderBufferGeometry(
		radiusTop, radiusBottom, height,
		radialSegments, heightSegments,
		openEnded,
		thetaStart, thetaLength);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.x = 0.2;
	mesh.position.y = 1;
	mesh.position.z = 0.2;
	scene.add(mesh);
}


	}
</script>


<script>
	function icra1(){
		{
	const radiusTop = 0.51;
	const radiusBottom = 0.51;
	const height = 1;
	const radialSegments = 100;
	const heightSegments =  3;
	const openEnded = true;
	const thetaStart = Math.PI * 2;
	const thetaLength = Math.PI * 2.00;
	const material = [
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/icra1.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/icra1.jpg')}),];
	const geometry = new THREE.CylinderBufferGeometry(
		radiusTop, radiusBottom, height,
		radialSegments, heightSegments,
		openEnded,
		thetaStart, thetaLength);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.x = 0.2;
	mesh.position.y = 1;
	mesh.position.z = 0.2;
	scene.add(mesh);
}

	}
</script>

<script>
	function matu(){
		{
	const radiusTop = 0.51;
	const radiusBottom = 0.51;
	const height = 1;
	const radialSegments = 100;
	const heightSegments =  3;
	const openEnded = true;
	const thetaStart = Math.PI * 2;
	const thetaLength = Math.PI * 2.00;
	const material = [
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/ugr.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/ugr.jpg')}),];
	const geometry = new THREE.CylinderBufferGeometry(
		radiusTop, radiusBottom, height,
		radialSegments, heightSegments,
		openEnded,
		thetaStart, thetaLength);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.x = 0.2;
	mesh.position.y = 1;
	mesh.position.z = 0.2;
	scene.add(mesh);
}

	}
</script>

<script>
	function slivs(){
		{
	const radiusTop = 0.5;
	const radiusBottom = 0.5;
	const height = 1;
	const radialSegments = 100;
	const cilinder = new THREE.CylinderBufferGeometry(
		radiusTop, radiusBottom, height, radialSegments);
	const material = [
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/slivs.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/slivs.jpg')}),];
	var mesh2 = new THREE.Mesh(cilinder, material);
	mesh2.position.x = 0.2;
	mesh2.position.y = 1;
	mesh2.position.z = 0.2;
	scene.add(mesh2);
}

	}
</script>

<script>
	function ris(){
		//последний рис
{
	const radiusTop = 0.5;
	const radiusBottom = 0.5;
	const height = 1;
	const radialSegments = 100;
	const cilinder = new THREE.CylinderBufferGeometry(
		radiusTop, radiusBottom, height, radialSegments);
	const material = [
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/rice.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/rice.jpg')}),];
	var mesh2 = new THREE.Mesh(cilinder, material);
	mesh2.position.x = 0.2;
	mesh2.position.y = 1;
	mesh2.position.z = 0.2;
	scene.add(mesh2);
}

	}
</script>

<script>
	function kov(){
		{
	const radiusTop = 0.51;
	const radiusBottom = 0.51;
	const height = 1;
	const radialSegments = 100;
	const heightSegments =  3;
	const openEnded = true;
	const thetaStart = Math.PI * 2;
	const thetaLength = Math.PI * 2.00;
	const material = [
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/ковёр.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/ковёр.jpg')}),];
	const geometry = new THREE.CylinderBufferGeometry(
		radiusTop, radiusBottom, height,
		radialSegments, heightSegments,
		openEnded,
		thetaStart, thetaLength);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.x = 0.2;
	mesh.position.y = 1;
	mesh.position.z = 0.2;
	scene.add(mesh);
}

	}
</script>

<script>
	function nori(){
		{
	const radiusTop = 0.51;
	const radiusBottom = 0.51;
	const height = 1;
	const radialSegments = 100;
	const heightSegments =  3;
	const openEnded = true;
	const thetaStart = Math.PI * 2;
	const thetaLength = Math.PI * 2.00;
	const material = [
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/nori.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/nori.jpg')}),];
	const geometry = new THREE.CylinderBufferGeometry(
		radiusTop, radiusBottom, height,
		radialSegments, heightSegments,
		openEnded,
		thetaStart, thetaLength);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.x = 0.2;
	mesh.position.y = 1;
	mesh.position.z = 0.2;
	scene.add(mesh);
}

	}
</script>

<script>
	function fish(){
		//последняя рыба
{
	const radiusTop = 0.25;
	const radiusBottom = 0.25;
	const height = 1.01;
	const radialSegments = 100;
	const cilinder1 = new THREE.CylinderBufferGeometry(
		radiusTop, radiusBottom, height, radialSegments);
	const material = [
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/fish.jpg')}),
	new THREE.MeshBasicMaterial({map: loader.load('assets/img/fish.jpg')}),];
	var mesh2 = new THREE.Mesh(cilinder1, material);
	mesh2.position.x = 0.2;
	mesh2.position.y = 1;
	mesh2.position.z = 0.2;
	scene.add(mesh2);
}

	}
</script>
