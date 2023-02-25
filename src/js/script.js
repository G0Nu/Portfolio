import * as THREE from 'three';



import { MeshBasicMaterial, MeshStandardMaterial, MeshToonMaterial, Triangle } from 'three';


const renderer = new THREE.WebGLRenderer({alpha: true});

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

renderer.setClearColor(0xffffff, 0);
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const axesHelper = new THREE.AxesHelper(5);
//scene.add(axesHelper);

camera.position.set(0, 0, 5);

const sphereGeometry = new THREE.SphereGeometry(0.4,10, 10);
const sphereMaterial = new THREE.MeshBasicMaterial({color: 0x424242, wireframe: true});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

const ringGeometry = new THREE.RingGeometry(1.4,1.45,92,undefined,undefined,9);
const ringMaterial = new THREE.MeshBasicMaterial({color: 0x969696, side: THREE.DoubleSide, wireframe: false});
const firstRing = new THREE.Mesh(ringGeometry, ringMaterial);
const secondRing = new THREE.Mesh(ringGeometry, ringMaterial);
const thirdRing = new THREE.Mesh(ringGeometry, ringMaterial);
const forthRing = new THREE.Mesh(ringGeometry, ringMaterial);
scene.add(firstRing,secondRing,thirdRing,forthRing);
/*
const triangleGeometry = new THREE.TetrahedronGeometry(2,1);
const trianMaterial = new THREE.MeshBasicMaterial({color: 0xFFFFFF, wireframe: true});
const triangle = new THREE.Mesh(triangleGeometry, trianMaterial);
//scene.add(triangle);
*/
sphere.position.z = 3;
firstRing.position.z = 2;
secondRing.position.z = 2;
thirdRing.position.z = 2;
forthRing.position.z = 2;

/*
function moveCamera(){
    const t = document.body.getBoundingClientRect().top;
    
    sphere.position.z -= 0.1;
    firstRing.position.z -= 0.1;
    secondRing.position.z -= 0.1;
    thirdRing.position.z -= 0.1;
    forthRing.position.z -= 0.1;
    sphere.position.y -= 0.1;
    firstRing.position.y -= 0.1;
    secondRing.position.y -= 0.1;
    thirdRing.position.y -= 0.1;
    forthRing.position.y -= 0.1;
    //camera.position.z += t* -0.00001;
}
*/
//random generator stars
/*
function addStar(){
    const geometry = new THREE.SphereGeometry(0.25, 24, 25);
    const material = new MeshBasicMaterial({color: 0xffffff});
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star);
}

Array(200).fill().forEach(addStar);
*/
//document.body.onscroll = moveCamera();

function animate() {
    sphere.rotation.y += 0.001;
    sphere.rotation.x += 0.0009;
    firstRing.rotation.y += 0.01;
    firstRing.rotation.x += 0.003;
    secondRing.rotation.x += 0.02;
    secondRing.rotation.y += 0.008;
    thirdRing.rotation.y += 0.008;
    thirdRing.rotation.x += 0.006;
    forthRing.rotation.y += 0.002;
    forthRing.rotation.x += 0.009;
    //triangle.rotation.y += 0.002;
    //triangle.rotation.x += 0.009;
    renderer.render(scene, camera);
}


renderer.setAnimationLoop(animate);
window.addEventListener('resize', function(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})