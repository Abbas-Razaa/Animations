let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 5;
scene.add(camera);

let box = new THREE.BoxGeometry(1,1,1);
let material = new THREE.MeshBasicMaterial({color: "red"});
let mesh = new THREE.Mesh(box, material);

// Transformations

// postioning the mesh
// mesh.position.x = 2;

// rotation of the mesh
// mesh.rotation.x = 3.14;  // 180 degrees in radians
// mesh.rotation.x = 45;
// mesh.rotation.y = Math.PI/4; // 45 degrees in radians

// scaling the mesh
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;


// convert deg to Rad
// THREE.degToRad = (degrees) => {
//   return degrees * (Math.PI/180);
// }

scene.add(mesh);


const canvas = document.querySelector('canvas');
let renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

// animation
let clock = new THREE.Clock();
function animate() {
  window.requestAnimationFrame(animate);
  renderer.render(scene,camera);
  mesh.rotation.y = clock.getElapsedTime();
  // mesh.rotation.y = clock.getElapsedTime() * 2; // double the speed
}

animate();