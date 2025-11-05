"use client"
import React, { useState, useEffect } from 'react';
import Cube3D from './components/ui/Cube3D';
import TypewriterText from './components/ui/TypewritterText';
import ProjectCard from './components/ui/ProjectCard';
import LanguageButton from './components/ui/LanguageButton';
import cardStyles from './styles/Card.module.css';
import buttonStyles from './styles/Button.module.css';
import layoutStyles from './styles/Layout.module.css';
import { ContentType, LanguageType, MainContent, Project, projectLinks, technologies } from './assets/mainText';
import useLanguage from './hooks/useLanguage';
import Link from 'next/link';

// Tipos TypeScript

const Home: React.FC = () => {
  // const [language, setLanguage] = useState<LanguageType>('pt');
  const [isClient, setIsClient] = useState<boolean>(false);

  const { language, setLanguage, toggleLanguage } = useLanguage()
  useEffect(() => {
    setIsClient(true);
  }, []);


  if (!isClient) {
    return <div className={layoutStyles.loadingScreen}>Loading...</div>;
  }



  const currentContent: ContentType = MainContent[language];

  // Configuração dos links dos projetos




  return (
    <div className={layoutStyles.container}>
      {/* Header */}
      <header className={layoutStyles.header}>
        <h1 className={layoutStyles.chromaticTitle}>
          {"</dev> Otávio Cruz"}
        </h1>
        <LanguageButton
          currentLanguage={language}
          onLanguageChange={toggleLanguage}
        />
      </header>

      <main className={layoutStyles.mainSection}>
        {/* Home Section */}

        <div className={layoutStyles.homeSection}>
          <div className="flex-1">
            <TypewriterText text={currentContent.title} />
          </div>
          <Cube3D />
        </div>

        {/* About Section */}
        <div className={`mx-8 mb-16 ${cardStyles.aboutCard}`}>
          <h3 className={cardStyles.aboutTitle}>{currentContent.about}</h3>
          <p className={cardStyles.aboutText}>{currentContent.aboutText1}</p>
          <p className={cardStyles.aboutText}>{currentContent.aboutText2}</p>
          <p className={cardStyles.aboutText}>{currentContent.aboutText3}</p>
        </div>

        {/* Projects Section */}
        <h2 className={layoutStyles.sectionTitle}>{currentContent.projects}</h2>
        <Link href={'/portfolio'}>
          <div className={`${buttonStyles.AllProjectsButton} w-full`}>
            {currentContent.projectsButton} {">>"}
          </div>
        </Link>
        
        <div className={layoutStyles.gridContainer}>
          {currentContent.projects_list.map((project: Project, index: number) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              links={projectLinks[index]}
              imageEmoji="💻"
            />
          ))}
        </div>

        {/* Technologies Section */}
        <h2 className={layoutStyles.sectionTitle}>{currentContent.technologies}</h2>
        <div className={layoutStyles.flexContainer}>
          {technologies.map((tech: string) => (
            <div key={tech} className={buttonStyles.techButton}>
              <span className={buttonStyles.techButtonText}>{tech}</span>
            </div>
          ))}
        </div>

        {/* Social Media Section */}
        <div className={layoutStyles.socialSection}>
          <h2 className={layoutStyles.sectionTitle}>{currentContent.socialMedia}</h2>
          <div className={layoutStyles.socialContainer}>
            <a href="https://www.linkedin.com/in/otávio-marques-cruz-0774912aa"
              target="_blank" rel="noopener noreferrer"
              className={`${buttonStyles.socialButton} ${buttonStyles.linkedinButton}`}>
              <span className="text-2xl">💼</span>
            </a>
            <a href="https://github.com/otbox"
              target="_blank" rel="noopener noreferrer"
              className={`${buttonStyles.socialButton} ${buttonStyles.githubButton}`}>
              <span className="text-2xl">💻</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;