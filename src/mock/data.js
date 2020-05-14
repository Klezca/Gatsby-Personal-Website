import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Norman Wong Chiew Look | AWS Cloud Engineer ', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Norman Wong Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Norman',
  subtitle: "I'm a AWS Cloud Engineer",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    // eslint-disable-next-line no-multi-str
    'Recent graduate with 1+ year of work experience \
    in two different Australian start-ups (Treiner and Shifra), \
    where I had hands on experience designing and building out AWS cloud networks and infrastructures \
    for Development, Staging and Production environment that are needed for existing Client-side SPA \
    or Server-side rendered (SSR) web application(s).',
  paragraphTwo:
    // eslint-disable-next-line no-multi-str
    'I have a broad knowledge and hands-on experience in software development practices \
  (Agile, CI/CD, Continuous Deployment, secret management, Girflow workflow), Linux system administration, \
  network administration, database administration, security and storage in the AWS cloud. ',
  paragraphThree:
    "I'm basically the operations / infrastructure person who write code to automate as much manual process / work as possible.",
  resume: 'https://www.nich19302.com/NormanWongCL_Resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project1.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to Work Together? Awesome!',
  btn: 'Contact Me',
  email: 'nich19032@outlook.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
