import * as THREE from 'three';

// Create the scene
const scene = new THREE.Scene();

// Create a camera, which determines what we'll see when we render the scene
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer and attach it to our document
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a directional light with high intensity
const highIntensityLight = new THREE.DirectionalLight(0xffffff, 5);
highIntensityLight.position.set(10, 10, 10);
scene.add(highIntensityLight);

// Add studio lighting
const ambientLight = new THREE.AmbientLight(0x404040, 2); // Soft white light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

// Create a box geometry and a basic material and combine them into a mesh
// const geometry = new THREE.SphereGeometry(1,10,10);
const geometry = new THREE.BoxGeometry(2,2,3,10,10,true);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00, roughness: .8, metalness: .3}); //Three.DoubleSide is used to show the back side of the cylinder
const cube = new THREE.Mesh(geometry, material);



// Add the cube to the scene
scene.add(cube);




// Handle window resize
window.addEventListener('resize', () => {
  // Update camera aspect ratio and projection matrix
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  // Update renderer size
  renderer.setSize(window.innerWidth, window.innerHeight);
});




// Create a function to animate our scene
function animate() {
  requestAnimationFrame(animate);

  // Rotate the cube for some basic animation
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the scene from the perspective of the camera
  renderer.render(scene, camera);
}

// Run the animation function for the first time to kick things off
animate();