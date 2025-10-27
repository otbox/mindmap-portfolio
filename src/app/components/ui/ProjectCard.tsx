import React from 'react';
import cardStyles from '@/styles/Card.module.css';

interface ProjectLink {
  href: string;
  emoji: string;
  disabled?: boolean;
}

interface ProjectCardProps {
  title: string;
  description: string;
  links?: ProjectLink[];
  imageEmoji?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  links = [],
  imageEmoji = '💻'
}) => {
  console.log('ProjectCard - Links recebidos:', links);
  
  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.cardImage}>
        <div className="text-6xl opacity-30">{imageEmoji}</div>
      </div>
      <div className={cardStyles.cardContent}>
        <h3 className={cardStyles.cardTitle}>{title}</h3>
        <p className={cardStyles.cardDescription}>{description}</p>
        
        {links && links.length > 0 && (
          <div 
            className={cardStyles.cardLinks}
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              zIndex: 100,
              marginTop: 'auto',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            {links.map((link, index) => {
              console.log(`Link ${index}:`, link);
              
              if (link.disabled) {
                return (
                  <div 
                    key={index} 
                    className={cardStyles.cardLinkDisabled}
                    title="Em desenvolvimento"
                    style={{
                      fontSize: '2rem',
                      padding: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '0.5rem',
                      minWidth: '52px',
                      minHeight: '52px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      zIndex: 101
                    }}
                  >
                    <span style={{ fontSize: '2rem', lineHeight: 1 }}>{link.emoji}</span>
                  </div>
                );
              }
              
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardStyles.cardLink}
                  title={link.emoji === '💻' ? 'Ver código no GitHub' : 'Acessar projeto'}
                  style={{
                    fontSize: '2rem',
                    padding: '0.75rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.5rem',
                    minWidth: '52px',
                    minHeight: '52px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    color: '#ffffff',
                    position: 'relative',
                    zIndex: 101,
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ fontSize: '2rem', lineHeight: 1 }}>{link.emoji}</span>
                </a>
              );
            })}
          </div>
        )}
        
        {/* Fallback caso não tenha links */}
        {(!links || links.length === 0) && (
          <div className={cardStyles.cardLinks}>
            <span style={{ opacity: 0.5, fontSize: '0.875rem' }}>
              Sem links disponíveis
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;