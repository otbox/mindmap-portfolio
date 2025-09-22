import React from 'react';
import cubeStyles from '../styles/Cube.module.css';

interface Cube3DProps {
  className?: string;
}

const Cube3D: React.FC<Cube3DProps> = ({ className = '' }) => {
  return (
    <div className={`${cubeStyles.cubeContainer} ${className}`}>
      <div className={cubeStyles.cube}>
        <div className={`${cubeStyles.face} ${cubeStyles.front}`}></div>
        <div className={`${cubeStyles.face} ${cubeStyles.back}`}></div>
        <div className={`${cubeStyles.face} ${cubeStyles.right}`}></div>
        <div className={`${cubeStyles.face} ${cubeStyles.left}`}></div>
        <div className={`${cubeStyles.face} ${cubeStyles.top}`}></div>
        <div className={`${cubeStyles.face} ${cubeStyles.bottom}`}></div>
      </div>
    </div>
  );
};

export default Cube3D;