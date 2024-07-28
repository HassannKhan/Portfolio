// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'HassannKhan', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/Portfolio',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'My Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'The 456 Game',
          description:'Ratings : 2.88★ | Downloads : 100K+ ',
          imageUrl:
            'https://lh3.googleusercontent.com/uwTjDmg-WrHvlRxqto3CC5VJaEFauQ4KY0ioI_NF_NKD1dSDD8k1OaCDOrngcT46IUE',
          link: 'https://play.google.com/store/apps/details?id=com.StagHead.SquidChallenges',
        },
        {
          title: 'Bus Parking',
          description: 'Ratings : 4.4★ | Downloads : 5K+ ',
          imageUrl:
            'https://lh3.googleusercontent.com/7fkK4nKEF0kk1uOqpZTH3-aqIXeHxzsodDMNqpHyYYVSoPWuYl9IcgzuXGl9RyG8Jg',
          link: 'https://play.google.com/store/apps/details?id=com.StagHead.BusParkingGame',
        },
        {
          title: 'Rally Racing',
          description: 'Ratings : 3.4★ | Downloads : 1K+ ',
          imageUrl:
            'https://lh3.googleusercontent.com/V40_Jezl6YQIrfb-9-umN8bLTvFopXBKcyrfYuC_pxLApOYnGl_pN1VO4UhISVYZYH8',
          link: 'https://play.google.com/store/apps/details?id=com.StagHeadGames.RallyRacing',
        },
        {
          title: 'The 456 Challenges',
          description: 'Ratings : 4.1★ | Downloads : 5K+ ',
          imageUrl:
            'https://lh3.googleusercontent.com/Yy4tGU_twCKkzs3X-h0yyoMTCQdK_VHbtyqZ5d3f1NoQcY5VRI-JxZKUklESKEwN3e0B',
          link: 'https://play.google.com/store/apps/details?id=com.StagHeadGames.TheChallenges',
        },
        {
          title: 'Luxury Car Parking',
          description: 'Ratings : 4.7★ | Downloads : 1K+ ',
          imageUrl:
            'https://lh3.googleusercontent.com/AaVEd8xylvBxhmZQHNnDWqiT36NCuT3nheW_797GoMQKPZNAKzBtcZK2JTlnUf--U34',
          link: 'https://play.google.com/store/apps/details?id=com.StagHeadGames.LuxuryCarParking',
        },
        {
          title: 'Sniper Army',
          description: 'Ratings : 0★ | Downloads : 100+ ',
          imageUrl:
            'https://lh3.googleusercontent.com/isxbgUisUR960wEhqLcxZtGayuWwiLudIu9z-GPdKxdSSto5nQ15QJScY85avpf-L-0',
          link: 'https://play.google.com/store/apps/details?id=com.DuckArts.SniperArmy3D',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Hassan Khan',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'hassan-khan-563148156',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'stagheadgames',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'stagheadgames@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/HassannKhan/VideosHosting/blob/main/Resume-Hassan-Khan.pdf?raw=true', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C#',
    'Unity3D',
    'Visual Studio',
    'Github',
    'Firebase',
    'AR/VR',
    'Debugging',
    'Photoshop',
    'Git',
    'UI/UX',
    'Performance Optimization',
    'Files Hosting',
    '3D Modeling',
    'Blender',
  ],
  experiences: [
    {
      company: 'Capitol Interactive',
      position: 'Game Programmer',
      from: 'FEB 2023',
      to: 'APR 2024',
      companyLink: 'https://www.capitol-interactive.com/',
    },
    {
      company: 'Foxrito Studios',
      position: 'Game Developer - Game Programmer',
      from: 'MAR 2022',
      to: 'JUL 2022',
      companyLink: 'https://www.foxrito.com/',
    },
    {
      company: 'Fiverr - as a Freelancer',
      position: 'Top Rated Game Developer - Game Programmer',
      from: 'AUG 2021',
      to: 'SEP 2023',
      companyLink: 'https://fiverr.com/hassan_khan_',
    },
    {
      company: 'Envoy Soft',
      position: 'Game Developer',
      from: 'JUN 2020',
      to: 'JUN 2021',
      companyLink: 'https://envoysoft.com/',
    },
  ],
  certifications: [
    {
      name: 'Winter Game Jam 2021',
      body: 'A challenge to make a game in which I competed ALONE against 200 PARTICIPANTS',
      year: 'January 2021',
      link: 'https://mlabs.co/game-jams/winter-game-jam-2021/',
    },
  ],
  educations: [
    {
      institution: 'University of Sargodha',
      degree: 'BSCS - Bachelors in Computer Sciene',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Elite College',
      degree: 'ICS - Intermediate in Computer Science',
      from: '2015',
      to: '2013',
    },
    {
      institution: 'Private School',
      degree: 'Matriculation',
      from: '2000',
      to: '2013',
    },
  ],
  publications: [
    {
      title: 'Bot Killer',
      conferenceName: '',
      journalName: 'Game Jame Challenge',
      authors: 'Stag Head Games',
      link: 'https://example.com',
      description:
        'https://www.youtube.com/embed/rGJZyQZyfgM?playlist=rGJZyQZyfgM&loop=1&autoplay=1&mute=1&loop=&controls=0',
    },
    {
      title: 'Count Warrior',
      conferenceName: 'Hobby Project',
      journalName: '',
      authors: 'Stag Head Games',
      link: 'https://example.com',
      description:
        'https://www.youtube.com/embed/aYBbxElrYb8?playlist=aYBbxElrYb8&loop=1&autoplay=1&mute=1&loop=&controls=0',
    },
    {
      title: 'Furious Drift',
      conferenceName: 'Hobby Project',
      journalName: '',
      authors: 'Stag Head Games',
      link: 'https://example.com',
      description:
        'https://www.youtube.com/embed/lOq9i1mw0KM?playlist=lOq9i1mw0KM&loop=1&autoplay=1&mute=1&loop=&controls=0',
    },
    {
      title: 'Luxury Car Parking',
      conferenceName: 'Published',
      journalName: '',
      authors: 'Stag Head Games',
      link: 'https://example.com',
      description:
        'https://www.youtube.com/embed/ub12x-zRK7k?playlist=ub12x-zRK7k&loop=1&autoplay=1&mute=1&loop=&controls=0',
    },
    {
      title: 'Bank Heist',
      conferenceName: 'Published',
      journalName: '',
      authors: 'Stag Head Games',
      link: 'https://example.com',
      description:
        'https://www.youtube.com/embed/OMJaf3qSEK8?playlist=OMJaf3qSEK8&loop=1&autoplay=1&mute=1&loop=&controls=0',
    },
    {
      title: 'GWagon Drive',
      conferenceName: 'Hobby Project',
      journalName: '',
      authors: 'Stag Head Games',
      link: 'https://example.com',
      description:
        'https://www.youtube.com/embed/4OpKPKybHKc?playlist=4OpKPKybHKc&loop=1&autoplay=1&mute=1&loop=&controls=0',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 1, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'valentine',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: false,
};

export default CONFIG;
