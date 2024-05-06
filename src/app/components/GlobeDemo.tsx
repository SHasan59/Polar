import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const World = dynamic(() => import('./ui/globe').then((m) => m.World), {
  ssr: false,
});

interface GlobeDemoProps {
  sampleArcs: {
    order: number;
    startLat: number;
    startLng: number;
    endLat: number;
    endLng: number;
    arcAlt: number;
    color: string;
  }[];
}

const GlobeDemo: React.FC<GlobeDemoProps> = ({ sampleArcs }) => {
  const globeConfig = {
    pointSize: 4,
    globeColor: '#062056',
    showAtmosphere: true,
    atmosphereColor: '#FFFFFF',
    atmosphereAltitude: 0.1,
    emissive: '#062056',
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: 'rgba(255,255,255,0.7)',
    ambientLight: '#38bdf8',
    directionalLeftLight: '#ffffff',
    directionalTopLight: '#ffffff',
    pointLight: '#ffffff',
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = ['#06b6d4', '#3b82f6', '#6366f1'];

  return (
    <div className="interactive-globe">
      <World data={sampleArcs} globeConfig={globeConfig} />
      <style jsx>{`
        .interactive-globe {
          position: relative;
          width: 100%;
          height: 500px; /* Adjust height as needed */
        }
      `}</style>
    </div>
  );
};

export default GlobeDemo;
