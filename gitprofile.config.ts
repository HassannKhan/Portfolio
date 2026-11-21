// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'HassannKhan',
  },
  base: '/Portfolio',

  // Total Downloads Stat Card Config
  downloads: {
    display: true,
    title: 'Total Downloads',
    count: '140K+',
    subtitle: 'Across Published Android Titles on Google Play',
  },

  projects: {
    github: {
      display: false,
      header: 'My Projects',
      mode: 'manual',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [],
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Fortuner Game - 4x4 Parking',
          description: 'Ratings : 4.5★ | Downloads : 110K+ ',
          imageUrl:
            'https://lh3.googleusercontent.com/Evw3zPpYWnfeEKZ5kx7A2LjCN-MRLfQXWvDc4ob2h2X4mVQbSDcj_2TIR36St4oabG1x6DFRIGIc9vgdgZYrMik',
          link: 'https://play.google.com/store/apps/details?id=com.StagHeadGames.FortunerParking',
        },
        {
          title: 'Sniper: Stealth Killer',
          description: 'Ratings : 3.53★ | Downloads : 17.9K+ ',
          imageUrl:
            'https://lh3.googleusercontent.com/f64qNm4O644bsKQzUSseve9iCdlwE7xJ5eNsY53jPFxb6miw6COlHWaX8-nCtYnjU2_8TAlHDy4zPKl_5ZGJFg',
          link: 'https://play.google.com/store/apps/details?id=com.StagHeadGames.SniperStealthKiller',
        },
        {
          title: 'Furious Drift Game',
          description: 'Ratings : 5.0★ | Downloads : 9.4K+ ',
          imageUrl:
            'https://lh3.googleusercontent.com/VV2UbhCVrhNjLoZqsmbJsw2i6VLe63sqlS-F1Xicxmuu-__AgzeWIhzgTdrRwrY82l3Z5dOItkvKdTYfKR_hQQI',
          link: 'https://play.google.com/store/apps/details?id=com.StagHeadGames.DriftCar',
        },
        {
          title: 'Bus Parking',
          description: 'Ratings : 4.4★ | Downloads : 5K+ ',
          imageUrl:
            'https://lh3.googleusercontent.com/7fkK4nKEF0kk1uOqpZTH3-aqIXeHxzsodDMNqpHyYYVSoPWuYl9IcgzuXGl9RyG8Jg',
          link: 'https://play.google.com/store/apps/details?id=com.StagHead.BusParkingGame',
        },
        {
          title: 'Arrows Maze Escape Puzzle Game',
          description: 'Ratings : 4.67★ | Downloads : 3.54K+ ',
          imageUrl:
            'https://lh3.googleusercontent.com/w43QsR1PbLjIIuXe1Gm7CS_xREWewq1W32-KHsgZPJbNIbMt1chFkbd-9OUQknwxhrRb2DBlORhEFpY0VRmlMw',
          link: 'https://play.google.com/store/apps/details?id=com.StagHeadGames.ArrowsPuzzle',
        },
        {
          title: 'Rally Racing',
          description: 'Ratings : 3.4★ | Downloads : 3.81K+ ',
          imageUrl:
            'https://lh3.googleusercontent.com/V40_Jezl6YQIrfb-9-umN8bLTvFopXBKcyrfYuC_pxLApOYnGl_pN1VO4UhISVYZYH8',
          link: 'https://play.google.com/store/apps/details?id=com.StagHeadGames.RallyRacing',
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
    linkedin: 'hassan-khan-stagheadgames',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'stagheadgames',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'stagheadgames@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/HassannKhan/VideosHosting/blob/main/Resume-Hassan-Khan.pdf?raw=true',
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
  blog: {
    source: 'dev',
    username: 'arifszn',
    limit: 1,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'valentine',
    disableSwitch: true,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: ['valentine'],
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
  footer: `Made with <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a> and ❤️`,
  enablePWA: false,
};

export default CONFIG;
