'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '@/context/ThemeContext';

export default function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  // Dynamic references for theme updates
  const sphereMatRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const wireframeMatRef = useRef<THREE.MeshBasicMaterial | null>(null);
  const pointsMatRef = useRef<THREE.PointsMaterial | null>(null);
  const ring1MatRef = useRef<THREE.MeshBasicMaterial | null>(null);
  const ring2MatRef = useRef<THREE.MeshBasicMaterial | null>(null);
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);
  const dirLightRef = useRef<THREE.DirectionalLight | null>(null);

  // Update 3D scene properties when theme changes
  useEffect(() => {
    const isLight = theme === 'light';

    if (sphereMatRef.current) {
      if (isLight) {
        sphereMatRef.current.color.setHex(0xe8f0e8);
        sphereMatRef.current.emissive.setHex(0xd0e8d0);
        sphereMatRef.current.metalness = 0.55;
        sphereMatRef.current.roughness = 0.25;
        sphereMatRef.current.opacity = 0.92;
      } else {
        sphereMatRef.current.color.setHex(0x06110a);
        sphereMatRef.current.emissive.setHex(0x020904);
        sphereMatRef.current.metalness = 0.85;
        sphereMatRef.current.roughness = 0.2;
        sphereMatRef.current.opacity = 0.88;
      }
      sphereMatRef.current.needsUpdate = true;
    }

    if (wireframeMatRef.current) {
      wireframeMatRef.current.color.setHex(isLight ? 0x41b94b : 0xb4f736);
      wireframeMatRef.current.opacity = isLight ? 0.45 : 0.35;
      wireframeMatRef.current.needsUpdate = true;
    }

    if (pointsMatRef.current) {
      pointsMatRef.current.color.setHex(isLight ? 0x41b94b : 0xb4f736);
      pointsMatRef.current.needsUpdate = true;
    }

    if (ring1MatRef.current) {
      ring1MatRef.current.color.setHex(isLight ? 0x41b94b : 0xb4f736);
      ring1MatRef.current.opacity = isLight ? 0.6 : 0.55;
      ring1MatRef.current.needsUpdate = true;
    }

    if (ring2MatRef.current) {
      ring2MatRef.current.color.setHex(isLight ? 0x65a30d : 0x84cc16);
      ring2MatRef.current.opacity = isLight ? 0.5 : 0.4;
      ring2MatRef.current.needsUpdate = true;
    }

    if (ambientLightRef.current) {
      ambientLightRef.current.color.setHex(isLight ? 0xffffff : 0x051a0b);
      ambientLightRef.current.intensity = isLight ? 2.2 : 1.6;
    }

    if (dirLightRef.current) {
      dirLightRef.current.color.setHex(isLight ? 0x41b94b : 0xb4f736);
      dirLightRef.current.intensity = isLight ? 2.8 : 2.5;
    }
  }, [theme]);

  // Main Scene Setup
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isVisible = true;
    let animationFrameId: number;

    // Bleed dimensions allow 3D orbital rings and particles to overflow gracefully without clipping
    const bleedX = 140;
    const bleedY = 100;
    const boundingRadius = 2.65; // covers full rings (2.45) + satellite + mouse tilt buffer
    const vFovRad = (45 * Math.PI) / 360;

    const width = (container.clientWidth || 500) + bleedX;
    const height = (container.clientHeight || 540) + bleedY;
    const aspect = width / height;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 100);

    // Dynamic Z distance so the 3D animation is never hidden or cut off on overflows
    const distY = boundingRadius / Math.tan(vFovRad);
    const distX = boundingRadius / (Math.tan(vFovRad) * Math.min(aspect, 1.25));
    camera.position.z = Math.max(distY, distX, 6.4);

    // Lightweight WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'low-power',
      precision: 'mediump',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));

    // Position canvas centered and allow unclipped overflow
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.left = '50%';
    renderer.domElement.style.top = '50%';
    renderer.domElement.style.transform = 'translate(-50%, -50%)';
    renderer.domElement.style.pointerEvents = 'none';
    renderer.domElement.style.maxWidth = 'none';
    renderer.domElement.style.overflow = 'visible';

    container.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const isLightInitial = theme === 'light';

    // 1. Core Sphere (Semi-translucent metallic tech body)
    const sphereGeom = new THREE.SphereGeometry(1.85, 36, 36);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: isLightInitial ? 0xe8f0e8 : 0x06110a,
      emissive: isLightInitial ? 0xd0e8d0 : 0x020904,
      metalness: isLightInitial ? 0.55 : 0.85,
      roughness: isLightInitial ? 0.25 : 0.2,
      transparent: true,
      opacity: isLightInitial ? 0.92 : 0.88,
    });
    sphereMatRef.current = sphereMat;
    const sphereMesh = new THREE.Mesh(sphereGeom, sphereMat);
    globeGroup.add(sphereMesh);

    // 2. Latitude / Longitude Cyber Wireframe Cage (App Green)
    const wireGeom = new THREE.WireframeGeometry(new THREE.SphereGeometry(1.86, 20, 20));
    const wireMat = new THREE.LineBasicMaterial({
      color: isLightInitial ? 0x41b94b : 0xb4f736,
      transparent: true,
      opacity: isLightInitial ? 0.45 : 0.35,
    });
    wireframeMatRef.current = wireMat as unknown as THREE.MeshBasicMaterial;
    const wireMesh = new THREE.LineSegments(wireGeom, wireMat);
    globeGroup.add(wireMesh);

    // 3. Global Network Hub Points (Fibonacci distribution across the globe)
    const numPoints = 280;
    const pointPositions = new Float32Array(numPoints * 3);
    const phiWeight = Math.PI * (3 - Math.sqrt(5)); // Golden ratio angle

    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2; // from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phiWeight * i;

      const r = 1.88; // Slightly above sphere surface
      pointPositions[i * 3] = Math.cos(theta) * radiusAtY * r;
      pointPositions[i * 3 + 1] = y * r;
      pointPositions[i * 3 + 2] = Math.sin(theta) * radiusAtY * r;
    }

    const pointsGeom = new THREE.BufferGeometry();
    pointsGeom.setAttribute('position', new THREE.BufferAttribute(pointPositions, 3));

    const pointsMat = new THREE.PointsMaterial({
      size: 0.06,
      color: isLightInitial ? 0x41b94b : 0xb4f736,
      transparent: true,
      opacity: 0.95,
    });
    pointsMatRef.current = pointsMat;

    const pointsMesh = new THREE.Points(pointsGeom, pointsMat);
    globeGroup.add(pointsMesh);

    // 4. Orbital Ring 1 (Tilted Equator Ring)
    const ring1Geom = new THREE.TorusGeometry(2.35, 0.016, 6, 64);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: isLightInitial ? 0x41b94b : 0xb4f736,
      transparent: true,
      opacity: isLightInitial ? 0.6 : 0.55,
    });
    ring1MatRef.current = ring1Mat;
    const ring1 = new THREE.Mesh(ring1Geom, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 8;
    globeGroup.add(ring1);

    // 5. Orbital Ring 2 (Polar Orbit Ring - Vibrant Lime Accent)
    const ring2Geom = new THREE.TorusGeometry(2.45, 0.013, 6, 64);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: isLightInitial ? 0x65a30d : 0x84cc16,
      transparent: true,
      opacity: isLightInitial ? 0.5 : 0.4,
    });
    ring2MatRef.current = ring2Mat;
    const ring2 = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 6;
    globeGroup.add(ring2);

    // Small orbiting data beacon satellite on Ring 1
    const satelliteGeom = new THREE.SphereGeometry(0.07, 8, 8);
    const satelliteMat = new THREE.MeshBasicMaterial({
      color: isLightInitial ? 0x41b94b : 0xb4f736,
    });
    const satellite = new THREE.Mesh(satelliteGeom, satelliteMat);
    globeGroup.add(satellite);

    // 6. Optimized Lighting
    const ambientLight = new THREE.AmbientLight(
      isLightInitial ? 0xffffff : 0x051a0b,
      isLightInitial ? 2.2 : 1.6
    );
    ambientLightRef.current = ambientLight;
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(
      isLightInitial ? 0x41b94b : 0xb4f736,
      isLightInitial ? 2.8 : 2.5
    );
    dirLight.position.set(3, 4, 5);
    dirLightRef.current = dirLight;
    scene.add(dirLight);

    // Mouse Tracking for Parallax Tilt
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      targetX = (x / rect.width) * 0.7;
      targetY = (y / rect.height) * 0.7;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Resize Handler
    const onResize = () => {
      if (!container) return;
      const w = (container.clientWidth || 500) + bleedX;
      const h = (container.clientHeight || 540) + bleedY;
      const asp = w / h;
      camera.aspect = asp;
      const dY = boundingRadius / Math.tan(vFovRad);
      const dX = boundingRadius / (Math.tan(vFovRad) * Math.min(asp, 1.25));
      camera.position.z = Math.max(dY, dX, 6.4);
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', onResize);

    // Auto-pause animation completely when offscreen (0% GPU/CPU overhead)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Smooth animation loop capped at 40 FPS for cool laptop operation
    let lastTime = 0;
    const interval = 1000 / 40; // 40 FPS cap
    let elapsed = 0;

    const animate = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = currentTime - lastTime;
      if (delta < interval) return;
      lastTime = currentTime - (delta % interval);

      elapsed += isLightInitial ? 0.007 : 0.015;

      // Mouse damping
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Continuous globe rotation on Y axis + subtle mouse tilt
      globeGroup.rotation.y = elapsed * 0.4 + mouseX * 0.5;
      globeGroup.rotation.x = 0.2 + Math.sin(elapsed * 0.2) * 0.06 - mouseY * 0.5;

      // Counter-rotating rings for orbital dynamism
      ring1.rotation.z = elapsed * 0.15;
      ring2.rotation.z = -elapsed * 0.2;

      // Move satellite along orbit
      satellite.position.x = Math.cos(elapsed * 1.2) * 2.35;
      satellite.position.y = Math.sin(elapsed * 1.2) * Math.sin(Math.PI / 3) * 2.35;
      satellite.position.z = Math.sin(elapsed * 1.2) * Math.cos(Math.PI / 3) * 2.35;

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      sphereGeom.dispose();
      sphereMat.dispose();
      wireGeom.dispose();
      wireMat.dispose();
      pointsGeom.dispose();
      pointsMat.dispose();
      ring1Geom.dispose();
      ring1Mat.dispose();
      ring2Geom.dispose();
      ring2Mat.dispose();
      satelliteGeom.dispose();
      satelliteMat.dispose();
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '540px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible',
      }}
    />
  );
}
