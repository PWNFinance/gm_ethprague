module.exports = {
  base: "/",
  // title: "Rio GM Events",
  // heading: "GM Rio 2023",
  // dateSubheading: "22. March - 3. April 2023",
  // subHeading:
  //   "We're bringing the Ethereum community to Rio de Janeiro! GM events website shows you events happening in Rio and allows anyone to add and update their side event.",
  // calendarHeading: "March 2023",
  // submitEventLink: "https://gmevents.typeform.com/riodejaneiro",
  startDate: {
    day: 22,
    month: 3,
    year: 2023,
  },
  endDate: {
    day: 3,
    month: 4,
    year: 2023,
  },
  daysInFirstMonth: 31,
  startHour: 8,
  endHour: 24,
  duarationInDays: 13,
  dayNames: [
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
  ],
  layout: 0, // 0 - banner layout, 1 - venue layout
  bannerPath: "TwitHeader_1500x5002.jpg", // only if banner layout
  venues: [
    {
      name: "Bamba House - Catete, Rio de Janeiro",
      desc: "EthSamba Hack will happen at the Centro de Convenções Florida located in Catete one of the historic districts of Rio de Janeiro and with access to the attached Museum of the Republic which has some of the nicest open gardens in the city. A surprise Hacker House will be announced soon!",
      path: "EthSamba_venue.jpg",
    },
    {
      name: "ETHSamba Hacker House",
      desc: "The Hacker House of EthSamba that will be open 24 hours from the start of the Hackathon. In it, all you need is to build your best project and take quick breaks by jumping in the pool or admiring the view!",
      path: "ethsambahack.jpeg",
    },
    
  ], // only if venue layout
  head: [
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["link", { rel: "icon", href: "./logo_gm_events.svg" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  themeConfig: {
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Events",
        link: "/events/",
      },
      {
        text: "Calendar",
        link: "/calendar/",
      },
    ],
    logo: "logo_gm_events.svg",
    search: false,
    // Assumes GitHub. Can also be a full GitLab url.
    // repo: 'JosefJ/PragueBlockchainWeek',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    // repoLabel: 'Contribute!',
    // Optional options for generating "Edit this page" link
    // if your docs are in a different repo from your main project:
    // docsRepo: 'vuejs/vuepress',
    // if your docs are not at the root of the repo:
    // docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: "master",
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    // editLinkText: 'Help us improve this page!'
  },
};
