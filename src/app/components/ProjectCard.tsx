import React from 'react';
import cardStyles from '../styles/Card.module.css';

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
  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.cardImage}>
        <div className="text-6xl opacity-30">{imageEmoji}</div>
      </div>
      <div className={cardStyles.cardContent}>
        <h3 className={cardStyles.cardTitle}>{title}</h3>
        <p className={cardStyles.cardDescription}>{description}</p>
        {links.length > 0 && (
          <div className={cardStyles.cardLinks}>
            {links.map((link, index) => (
              link.disabled ? (
                <div key={index} className={cardStyles.cardLinkDisabled}>
                  <span className="text-2xl">{link.emoji}</span>
                </div>
              ) : (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardStyles.cardLink}
                >
                  <span className="text-2xl">{link.emoji}</span>
                </a>
              )
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;