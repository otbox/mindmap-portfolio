export interface ContentType {
  title: string;
  about: string;
  projects: string;
  projectsButton: string,
  technologies: string;
  socialMedia: string;
  aboutText1: string;
  aboutText2: string;
  aboutText3: string;
  projects_list: Project[];
}

export interface Project {
  title: string;
  description: string;
}

export type LanguageType = 'pt' | 'en';

export interface ContentData {
  pt: ContentType;
  en: ContentType;
}

export const technologies: string[] = ['HTML', 'CSS', 'JS', 'TS', 'React', 'Flutter', 'Git', 'Linux', 'SQL', 'Java', 'C'];

export const projectLinks = [
  [
    { href: 'https://github.com/otbox/TCC', emoji: '💻' },
    { href: 'https://estufa-5414b.web.app/', emoji: '🔗' }
  ],
  [
    { href: 'https://loja-705b4.web.app/', emoji: '🔗' }
  ],
  [
    { href: '#', emoji: '💻', disabled: true }
  ]
];

export const MainContent: ContentData = {
    pt: {
      title: "Sou Desenvolvedor",
      about: "Sobre mim",
      projects: "Projetos",
      projectsButton: "Ver Todos os Projetos",
      technologies: "Tecnologias",
      socialMedia: "Redes Sociais",
      aboutText1: "Eu sou Otávio Marques Cruz, atualmente morando em Limeira. Tenho curiosidade sobre novas tecnologias e busco o autoaperfeiçoamento, não apenas nas minhas habilidades, mas também como pessoa.",
      aboutText2: "Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na Unicamp, focando em tecnologias como React e React Native. Tenho particular interesse em programação para web e aplicativos multiplataforma.",
      aboutText3: "Comecei a programar em 2021, durante a pandemia. Enquanto ficava em casa, comecei a explorar novos temas para estudar e descobri um interesse por programação. Comecei com desenvolvimento web, aprendendo HTML e CSS através de cursos online. Mais tarde, me matriculei no Ensino Técnico Integrado em Tecnologia da Informação na Escolas Padre Anchieta, onde adquiri conhecimentos em HTML, CSS, JavaScript, Java, C#, SQL Server, Arduino e Redes de Computadores. Além disso, estudei React e React Native de forma independente para aplicar essas tecnologias no meu projeto final (TCC).",
      projects_list: [
        {
          title: "Gestão de Estufa",
          description: "Web e App, feitos com React, React Native, Axios. Usando Arduino para coletar dados sobre umidade e temperatura, e depois controlar dispositivos. Com uma API PHP, para enviar dados e recebê-los no banco de dados MySQL. Para teste, utiliza usuário:\"teste\" senha:\"123\""
        },
        {
          title: "Ecommerce Simples",
          description: "Um ecommerce simples feito com React, com API PHP para gerenciar os dados, e banco de dados MySQL. O mais difícil nesse projeto foi o orçamento baixo, usando diferentes maneiras de armazenar dados. Banco de dados MySQL, que armazena os produtos, e as referências para as imagens no IMGBB. Ao criar novos produtos, as imagens são comprimidas para baixa qualidade e depois enviadas para o IMGBB, que retorna a URL da imagem e a adiciona ao banco de dados."
        },
        {
          title: "Spotify Downloader com Letras (em andamento)",
          description: "Um simples Spotify Downloader feito com cliente web, usando a API do Spotify para baixar as músicas e as letras. No servidor, foi utilizado o nodeJS, e o FFmpeg é necessário para a biblioteca ytdlp. O servidor está em um contêiner Docker. O Front-End foi feito com React, e a busca é realizada pela API do Spotify. Por enquanto, funciona apenas em playlists."
        }
      ]
    },
    en: {
      title: "I'm a Developer",
      about: "About Me",
      projects: "Projects",
      projectsButton: "See All Projects",
      technologies: "Technologies",
      socialMedia: "Social Media",
      aboutText1: "I'm Otávio Marques Cruz, currently living in Limeira. I have curiosity about new technologies, and i strive for self-improvement, not only in my Abilities, but also as a person.",
      aboutText2: "Currently studying Systems Analysis and Development at Unicamp, focusing on technologies such as React and React Native. I am particularly interested in programming for web and multiplatform applications.",
      aboutText3: "I began programming in 2021 during the pandemic. While staying at home, I started exploring new topics to study and discovered an interest in programming. I began with web development, learning HTML and CSS through online courses. Later, I enrolled in the Integrated Technical High School in Information Technology at Escolas Padre Anchieta, where I gained knowledge in HTML, CSS, JavaScript, Java, C#, SQL Server, Arduino, and Networking. Additionally, I studied React and React Native independently to apply these technologies in my final project (TCC).",
      projects_list: [
        {
          title: "Greenhouse management",
          description: "Web and App, made with React, React Native, Axios. Using Arduino for collect data about humidity and temperature, then controls devices. With an API PHP, to send data and receive to the MySQL database. For test, uses user:\"teste\" pass:\"123\""
        },
        {
          title: "Simple ECommerce",
          description: "A simple Ecommerce made with React, with API PHP to manage the data, and MySQL database. The most difficult in this project, was in a low budget, using different ways to storage data. MySQL database, that storage the products, and the references to the images on IMGBB. On create new products, that compress to a low quality, and then, to upload to the IMGBB, that returns the URL of the image, and add to database."
        },
        {
          title: "Spotify Downloader with Lyrics (in Work)",
          description: "A simple Spotify Downloader made with web client, with API Spotify, to download the songs, and the lyrics. On server used nodeJS, FFmpeg is required for the ytdlp library. Server are on Docker container. Front-End made with React, and search by Spotify API. While, only works on playlists."
        }
      ]
    }
  };