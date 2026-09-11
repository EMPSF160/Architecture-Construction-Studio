/**
 * ARCHITECTURE & CONSTRUCTION STUDIO — THREE.JS SIGNATURE EXPERIENCE
 * Minimal rotating wireframe architectural volume / pavilion responding to scroll & mouse
 */

function initThreeScene() {
  const container = document.getElementById('three-canvas-container');
  if (!container || typeof THREE === 'undefined') return;

  try {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x101010);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 5, 16);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Clear existing canvas if any
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Group for architectural volume
    const pavilionGroup = new THREE.Group();
    scene.add(pavilionGroup);

    // Architectural Wireframe Grid & Columns (Tectonic grammar)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xD9D2C5,
      transparent: true,
      opacity: 0.65,
      linewidth: 1
    });

    const oxideMaterial = new THREE.LineBasicMaterial({
      color: 0x8D5845,
      transparent: true,
      opacity: 0.9,
      linewidth: 1.5
    });

    // 1. Base grid planes
    const gridHelper = new THREE.GridHelper(12, 12, 0x8D5845, 0x333333);
    gridHelper.position.y = -2.5;
    pavilionGroup.add(gridHelper);

    // 2. Structural Column Boxes
    const colGeometry = new THREE.BoxGeometry(0.35, 5, 0.35);
    const colEdges = new THREE.EdgesGeometry(colGeometry);

    const columnPositions = [
      [-4, 0, -4], [4, 0, -4], [-4, 0, 4], [4, 0, 4],
      [-2, 0, -2], [2, 0, -2], [-2, 0, 2], [2, 0, 2],
      [0, 0, -4], [0, 0, 4], [-4, 0, 0], [4, 0, 0]
    ];

    columnPositions.forEach(pos => {
      const colLine = new THREE.LineSegments(colEdges, lineMaterial);
      colLine.position.set(pos[0], pos[1], pos[2]);
      pavilionGroup.add(colLine);
    });

    // 3. Cantilevered Roof Slab
    const roofGeometry = new THREE.BoxGeometry(10, 0.3, 10);
    const roofEdges = new THREE.EdgesGeometry(roofGeometry);
    const roofLine = new THREE.LineSegments(roofEdges, oxideMaterial);
    roofLine.position.y = 2.65;
    pavilionGroup.add(roofLine);

    // 4. Central Geometric Oculus / Volume
    const oculusGeo = new THREE.IcosahedronGeometry(1.8, 1);
    const oculusEdges = new THREE.EdgesGeometry(oculusGeo);
    const oculusLine = new THREE.LineSegments(oculusEdges, oxideMaterial);
    oculusLine.position.y = 0.5;
    pavilionGroup.add(oculusLine);

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    window.addEventListener('mousemove', (e) => {
      const mouseX = (e.clientX - windowHalfX) * 0.0005;
      const mouseY = (e.clientY - windowHalfY) * 0.0005;
      targetRotationY = mouseX;
      targetRotationX = mouseY;
    }, { passive: true });

    // Window Resize
    window.addEventListener('resize', () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Slow ambient architectural rotation
      pavilionGroup.rotation.y += 0.003;
      oculusLine.rotation.x += 0.005;
      oculusLine.rotation.y -= 0.004;

      // Mouse lerp influence
      pavilionGroup.rotation.y += (targetRotationY - pavilionGroup.rotation.y) * 0.05;
      pavilionGroup.rotation.x += (targetRotationX - pavilionGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();
  } catch (err) {
    console.warn('Three.js WebGL fallback initialized:', err);
    if (container) {
      container.style.backgroundImage = 'radial-gradient(circle at center, #1c1c1c 0%, #101010 100%)';
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initThreeScene();
});
