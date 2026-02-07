import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

export default function GlobalNetwork() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Earth Sphere with better material
    const geometry = new THREE.SphereGeometry(2, 64, 64);
    const material = new THREE.MeshPhongMaterial({
      color: 0x00A2FF,
      transparent: true,
      opacity: 0.2,
      wireframe: true,
      emissive: 0x00A2FF,
      emissiveIntensity: 0.2,
    });
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Atmospheric glow
    const glowGeom = new THREE.SphereGeometry(2.1, 64, 64);
    const glowMat = new THREE.MeshPhongMaterial({
      color: 0x00A2FF,
      transparent: true,
      opacity: 0.05,
      side: THREE.BackSide,
    });
    const glow = new THREE.Mesh(glowGeom, glowMat);
    scene.add(glow);

    // Points
    const pointsCount = 60;
    const positions = new Float32Array(pointsCount * 3);
    const pointObjects: THREE.Vector3[] = [];

    for (let i = 0; i < pointsCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / pointsCount);
      const theta = Math.sqrt(pointsCount * Math.PI) * phi;
      
      const x = 2 * Math.cos(theta) * Math.sin(phi);
      const y = 2 * Math.sin(theta) * Math.sin(phi);
      const z = 2 * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      pointObjects.push(new THREE.Vector3(x, y, z));
    }

    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pointsMaterial = new THREE.PointsMaterial({ 
      color: 0x00A2FF, 
      size: 0.08,
      transparent: true,
      opacity: 0.8
    });
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    earth.add(points);

    // Lines Group
    const linesGroup = new THREE.Group();
    earth.add(linesGroup);

    const createLine = () => {
      const start = pointObjects[Math.floor(Math.random() * pointsCount)];
      const end = pointObjects[Math.floor(Math.random() * pointsCount)];
      if (start.distanceTo(end) < 0.1) return;

      const curve = new THREE.QuadraticBezierCurve3(
        start,
        start.clone().lerp(end, 0.5).multiplyScalar(1.4),
        end
      );

      const pathPoints = curve.getPoints(50);
      const lineGeom = new THREE.BufferGeometry().setFromPoints(pathPoints);
      const lineMat = new THREE.LineBasicMaterial({ 
        color: 0x00A2FF, 
        transparent: true, 
        opacity: 0 
      });
      const line = new THREE.Line(lineGeom, lineMat);
      linesGroup.add(line);

      let p = 0;
      const animateLine = () => {
        p += 0.02;
        lineMat.opacity = Math.sin(p) * 0.4;
        if (p > Math.PI) {
          linesGroup.remove(line);
          lineGeom.dispose();
          lineMat.dispose();
          return;
        }
        requestAnimationFrame(animateLine);
      };
      animateLine();
    };

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0x00A2FF, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.y += 0.003;
      if (Math.random() > 0.94) createLine();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <section id="network" className="py-24 relative bg-black/40 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-primary font-bold tracking-wider uppercase mb-4">شبكة الموزعين العالمية</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              Skyfol <span className="text-gray-400">حول العالم</span>
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              نحن نتوسع باستمرار لتوفير أفضل حلول حماية السيارات في جميع أنحاء العالم. انضم إلى شبكة الموزعين المعتمدين لدينا وكن جزءاً من قصة نجاح عالمية.
            </p>
            
            {/* Map Placeholder/Integration */}
            <div className="glass-card p-4 rounded-xl border border-white/10 mb-8 overflow-hidden">
              <div className="h-48 bg-gray-900/50 rounded-lg flex items-center justify-center relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115935.1328080084!2d46.6576856!3d24.7525381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d48939b%3A0x120a104f46487e47!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                  className="w-full h-full border-0 opacity-50 grayscale invert hover:opacity-100 hover:grayscale-0 hover:invert-0 transition-all duration-500"
                  loading="lazy"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none border border-primary/20 rounded-lg"></div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                <span className="text-white text-sm">موزعون معتمدون</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                <span className="text-white text-sm">موزعون مطلوبون</span>
              </div>
            </div>
          </motion.div>
          
          <div ref={containerRef} className="lg:w-1/2 h-[600px] relative">
            {/* Canvas injected here */}
          </div>
        </div>
      </div>
    </section>
  );
}
