import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Create the scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

// Add a simple cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 ,wireframe: true});
const cube = new THREE.Mesh(geometry, material);

// add the cube to the scene
scene.add(cube);

// Create a renderer
const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

// orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // When set to true, this property enables damping (or inertia) on the controls. This means that when you stop dragging the mouse, the camera will continue to move slightly, gradually coming to a stop, rather than stopping immediately.

// controls.autorotate = true;
// controls.autoRotateSpeed = 0.2;
controls.enableZoom = true;
controls.enablePan = true;
controls.dampingFactor = 0.25; // friction

camera.position.z = 5;


// making responsive
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});


function animate() {
  window.requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  controls.update();


  renderer.render(scene, camera);
}

animate();