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
          description:
            'Ratings : 2.88★ | Downloads : 100K+ ',
          imageUrl:
            'https://lh3.googleusercontent.com/uwTjDmg-WrHvlRxqto3CC5VJaEFauQ4KY0ioI_NF_NKD1dSDD8k1OaCDOrngcT46IUE',
          link: 'https://play.google.com/store/apps/details?id=com.StagHead.SquidChallenge',
        },
        {
          title: 'Bus Parking',
          description:
            'Ratings : 4.4★ | Downloads : 5K+ ',
          imageUrl:
            'https://lh3.googleusercontent.com/7fkK4nKEF0kk1uOqpZTH3-aqIXeHxzsodDMNqpHyYYVSoPWuYl9IcgzuXGl9RyG8Jg',
          link: 'https://play.google.com/store/apps/details?id=com.StagHead.BusParking',
        },
        {
          title: 'Rally Racing',
          description:
            'Ratings : 2.8★ | Downloads : 1K+ ',
          imageUrl:
            'https://lh3.googleusercontent.com/V40_Jezl6YQIrfb-9-umN8bLTvFopXBKcyrfYuC_pxLApOYnGl_pN1VO4UhISVYZYH8',
          link: 'https://play.google.com/store/apps/details?id=com.StagHeadGames.RallyRacing',
        },
        {
          title: 'The 456 Challenges',
          description:
            'Ratings : 3.9★ | Downloads : 1K+ ',
          imageUrl:
            'https://lh3.googleusercontent.com/Yy4tGU_twCKkzs3X-h0yyoMTCQdK_VHbtyqZ5d3f1NoQcY5VRI-JxZKUklESKEwN3e0B',
          link: 'https://play.google.com/store/apps/details?id=com.StagHeadGames.TheChallenges',
        },
        {
          title: 'Luxury Car Parking',
          description:
            'Ratings : 4.7★ | Downloads : 1K+ ',
          imageUrl:
            'https://lh3.googleusercontent.com/AaVEd8xylvBxhmZQHNnDWqiT36NCuT3nheW_797GoMQKPZNAKzBtcZK2JTlnUf--U34',
          link: 'https://play.google.com/store/apps/details?id=com.StagHeadGames.LuxuryCarParking',
        },
        {
          title: 'Sniper Army',
          description:
            'Ratings : 0★ | Downloads : 100+ ',
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
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
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
        'https://www.youtube.com/embed/ub12x-zRK7k?playlist=ub12x-zRK7k&loop=1&autoplay=1&mute=1&loop=&controls=0',
    },
    {
      title: 'Luxury Car Parking',
      conferenceName: 'Published',
      journalName: '',
      authors: 'Stag Head Games',
      link: 'https://example.com',
      description:
        'https://www.youtube.com/embed/aYBbxElrYb8?playlist=aYBbxElrYb8&loop=1&autoplay=1&mute=1&loop=&controls=0',
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
