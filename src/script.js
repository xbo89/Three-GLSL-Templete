import * as THREE from "three";
import { Pane } from "tweakpane";

import VertexShader from "./shader/vertex.glsl";
import FragmentShader from "./shader/fragment.glsl";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.PlaneGeometry(4, 4);
const material = new THREE.RawShaderMaterial({
  vertexShader: VertexShader,
  fragmentShader: FragmentShader,
  wireframe: false,
});

const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  //   plane.rotation.x += 0.01;
  //   plane.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();

const PARAMS = {
  wireframe: false,
};
const pane = new Pane({
  title: "GUI Controls",
});
pane.addInput(PARAMS, "wireframe").on("change", (ev) => {
  //   console.log(ev.value);
  material.wireframe = ev.value;
});

// console.log(material);
