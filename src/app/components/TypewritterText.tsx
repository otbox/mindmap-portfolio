import React from 'react';
import typewriterStyles from '../styles/Typewritter.module.css';

interface TypewriterTextProps {
  text: string;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  className = '' 
}) => {
  return (
    <div className='w-fit'>
      <div className={`${typewriterStyles.typewriter} ${className}`}>
        <h1 className={typewriterStyles.typewriterText}>
          {text}
        </h1>
      </div>
    </div>
  );
};

export default TypewriterText;