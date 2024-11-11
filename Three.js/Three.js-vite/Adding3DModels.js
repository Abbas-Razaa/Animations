import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

let scene, camera, renderer, controls;

function init() {
  // Scene
  scene = new THREE.Scene();

  // Camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 8);

  // Renderer
  const canvas = document.getElementById('canvas');
  renderer = new THREE.WebGLRenderer({canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.body.appendChild(renderer.domElement);

  // HDRI Lighting
  const rgbeLoader = new RGBELoader();
  rgbeLoader.load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/rural_asphalt_road_1k.hdr', function (texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = texture;
    // scene.background = texture;
  });

  const loader = new GLTFLoader();
  loader.load('./wooden_box.glb', function (gltf) {
    gltf.scene.position.y = -1;
    scene.add(gltf.scene);
  });
  // Orbit Controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  // Add a simple box geometry
  // const geometry = new THREE.BoxGeometry();
  // const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
  // const cube = new THREE.Mesh(geometry, material);
  // scene.add(cube);

  // Handle window resize
  window.addEventListener('resize', onWindowResize, false);

  animate();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

init();