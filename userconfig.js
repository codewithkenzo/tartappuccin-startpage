let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Carugate, Milan',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  localIcons: true,
  fastlink: "https://chat.openai.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-13.gif",
      categories: [{
        name: "Social Media",
        links: [
          {
            name: "whatsapp",
            url: "https://web.whatsapp.com/",
            icon: "brand-whatsapp",
            icon_color: "#65b690",
          },
          {
            name: "reddit",
            url: "https://www.reddit.com/",
            icon: "brand-reddit",
            icon_color: "#ca9673",
          },



        ],
      }, {
        name: "Games",
        links: [
          {
            name: "chess",
            url: "https://www.chess.com/home",
            icon: "chess-queen-filled",
            icon_color: "#c6c7bf",
          },
          {
            name: "monkeytype",
            url: "https://monkeytype.com/",
            icon: "keyboard",
            icon_color: "#d17559",
          },
          {
            name: "tetris",
            url: "https://tetris.com/",
            icon: "brand-apple-arcade",
            icon_color: "#ea6962",
          },
        ],
      }, {
        name: "Video",
        links: [
          {
            name: "youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube-filled",
            icon_color: "#df6963",
          },
          {
            name: "hianime",
            url: "https://hianime.nz/home",
            icon: "brand-funimation",
            icon_color: "#b76de2",
          },{
            name: "mangafire",
            url: "https://mangafire.to/home",
            icon: "books",
            icon_color: "#1972c6",
          },

          {
            name: "twitch",
            url: "https://www.twitch.tv/",
            icon: "brand-twitch",
            icon_color: "#d671f0",
          },
        ],
      }],
    },
    {
      name: "design",
      background_url: "src/img/banners/cbg-6.gif",
      categories: [
        {
          name: "showcase",
          links: [
            {
              name: "pinterest",
              url: "https://www.pinterest.es/",
              icon: "brand-pinterest",
              icon_color: "#ea6962",
            },
            {
              name: "dribble",
              url: "https://dribbble.com/following",
              icon: "brand-dribbble-filled",
              icon_color: "#d3869b",
            },
          ],
        },
        {
          name: "inspiration",
          links: [
            {
              name: "landbook",
              url: "https://land-book.com/",
              icon: "brand-deviantart",
              icon_color: "#89b482",
            },
            {
              name: "godly",
              url: "https://godly.website/",
              icon: "brand-deviantart",
              icon_color: "#89b482",
            },
            {
              name: "dark.design",
              url: "https://www.dark.design/",
              icon: "brand-deviantart",
              icon_color: "#89b482",
            },
          ],
        },
        {
          name: "tools",
          links: [
            {
              name: "figma",
              url: "https://www.figma.com",
              icon: "brand-figma",
              icon_color: "#d3869b",
            },
            {
              name: "framer",
              url: "https://www.framer.com",
              icon: "brand-figma",
              icon_color: "#d3869b",
            },
            {
              name: "colorhunt",
              url: "https://colorhunt.co/",
              icon: "color-picker",
              icon_color: "#ea6962",
            },
          ],
        }
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "repositories",
          links: [
            {
              name: "github",
              url: "https://github.com/codewithkenzo?tab=repositories",
              icon: "brand-github",
              icon_color: "#e78a4e",
            },
            {
              name: "gitlab",
              url: "https://gitlab.com/",
              icon: "brand-gitlab",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "js-course",
              url: "https://traversy.hecked.workers.dev/0:/Modern%20JavaScript%20From%20The%20Beginning%202.0%20[For%20Streaming]/",
              icon: "brand-codepen",
              icon_color: "#d2d39c",
            },
            {
              name: "roadmap.sh",
              url: "https://roadmap.sh/full-stack",
              icon: "sitemap",
              icon_color: "#ccd300",
            },
            {
              name: "javascript",
              url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              icon: "brand-javascript",
              icon_color: "#f3f589",
            }


          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "codewars",
              url: "https://www.codewars.com/dashboard",
              icon: "code",
              icon_color: "#c282db",
            },
            {
              name: "hackthebox",
              url: "https://app.hackthebox.com",
              icon: "box",
              icon_color: "#a9b665",
            },
            {
              name: "cryptohack",
              url: "https://cryptohack.org/challenges/",
              icon: "brain",
              icon_color: "#e78a4e",
            },
            {
              name: "tryhackme",
              url: "https://tryhackme.com/dashboard",
              icon: "brand-onedrive",
              icon_color: "#ea6962",
            },
            {
              name: "hackerrank",
              url: "https://www.hackerrank.com/dashboard",
              icon: "code-asterix",
              icon_color: "#a9b665",
            },
          ],
        },
      ],
    },
    {
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "google",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },{
              name: "calendar",
              url: "https://calendar.google.com/calendar/u/0/r",
              icon: "calendar",
              icon_color: "#f0e6ac",
            },
            {
              name: "proton",
              url: "https://mail.proton.me/u/0/inbox",
              icon: "brand-gmail",
              icon_color: "#7234A2",
            },

          ],
        },
        {
          name: "storage",
          links: [
            {
              name: "raindrop",
              url: "https://app.raindrop.io",
              icon: "droplet-bolt",
              icon_color: "#2178db",
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
           icon: "brand-google-drive",
              icon_color: "#6ad3b0",
            },

            {
              name: "photos",
              url: "https://photos.google.com/u/1",
              icon: "photo-filled",
              icon_color: "#8bdfe6",
            },
            {
              name: "filen",
              url: "https://filen.io/",
              icon: "brand-foursquare",
              icon_color: "#98e0d1",
            },
          ],
        },
        {
          name: "auth",
          links: [
                       {
              name: "ente",
              url: "https://auth.ente.io/auth",
              icon: "lock-square-rounded",
              icon_color: "#bcdae7",
            },
            {
              name: "Proton",
              url: "https://pass.proton.me/u/0",
              icon: "brand-apple-arcade",
              icon_color: "#BE8FB0",
            },
                      ],
        },
        

      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
