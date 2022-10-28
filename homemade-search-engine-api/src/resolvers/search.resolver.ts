import { SearchType } from "../types/google.types";

const resolvers = {
  Query: {
    search: async (
      parent: any,
      args: {
        textToSearch: string;
        searchType: SearchType;
        page: number;
      },
      context: {
        key: string;
        searchEngineId: string;
      },
      info: any
    ) => {
      if (args.searchType === SearchType.IMAGE) {
        return {
          nbHits: 100,
          results: [
            {
              link: "https://upload.wikimedia.org/wikipedia/commons/5/58/Wikipe-tan_manga_page1.jpg",
              title: "Manga - Wikipedia",
              displayLink: "en.wikipedia.org",
              snippet: "Manga - Wikipedia",
            },
            {
              link: "https://jw-webmagazine.com/wp-content/uploads/2020/05/Best-Manga-of-All-Time.jpg",
              title: "25 Best Manga of All Time - Japan Web Magazine",
              displayLink: "jw-webmagazine.com",
              snippet: "25 Best Manga of All Time - Japan Web Magazine",
            },
            {
              link: "https://www.slj.com/binaries/content/gallery/Jlibrary/2022/05/2205-mangaprimer-list-f.jpg",
              title:
                "A Starter Manga Set: 15 Titles for Children and Tweens | School ...",
              displayLink: "www.slj.com",
              snippet:
                "A Starter Manga Set: 15 Titles for Children and Tweens | School ...",
            },
            {
              link: "https://mangaplus.shueisha.co.jp/drm/popup/207727.jpg?key=c6b9e330a5b8df50501457af13200b2b&duration=86400",
              title: "MANGA Plus by SHUEISHA",
              displayLink: "mangaplus.shueisha.co.jp",
              snippet: "MANGA Plus by SHUEISHA",
            },
            {
              link: "https://as01.epimg.net/meristation_en/imagenes/2022/08/02/news/1659471137_684680_1659471229_noticia_normal.jpg",
              title:
                "One Piece 1056, when will the next chapter of the manga be ...",
              displayLink: "en.as.com",
              snippet:
                "One Piece 1056, when will the next chapter of the manga be ...",
            },
            {
              link: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781507216514/make-your-own-manga-9781507216514_hr.jpg",
              title:
                "Make Your Own Manga | Book by Elaine Tipping, Erwin Prasetya ...",
              displayLink: "www.simonandschuster.com",
              snippet:
                "Make Your Own Manga | Book by Elaine Tipping, Erwin Prasetya ...",
            },
            {
              link: "https://warrenist.com/calendar/wp-content/uploads/2021/08/Manga-warren-county-memorial-library.jpg",
              title: "manga Archives - The Warrenist",
              displayLink: "warrenist.com",
              snippet: "manga Archives - The Warrenist",
            },
            {
              link: "https://i.pinimg.com/originals/92/2d/b0/922db04b3078bcb2a91e7839364e4ac5.jpg",
              title:
                "Ikemen sengoku manga Vol. 2 - page 67 | Mangas romanticos, Manga ...",
              displayLink: "www.pinterest.com",
              snippet:
                "Ikemen sengoku manga Vol. 2 - page 67 | Mangas romanticos, Manga ...",
            },
            {
              link: "https://cdn-prod.scalefast.com/public/assets/img/resized/wizardsofthecoast-secret-lair/864c66c8868650e8b74c2c0a25e16dbc_1920_KR.png",
              title: "NEO-KAMIGAWA Manga Pack] | Secret Lair",
              displayLink: "secretlair.wizards.com",
              snippet: "NEO-KAMIGAWA Manga Pack] | Secret Lair",
            },
            {
              link: "https://img.freepik.com/free-vector/smiling-girl-anime-character-poster_603843-3026.jpg?w=360",
              title:
                "Manga anime girl Images | Free Vectors, Stock Photos & PSD",
              displayLink: "www.freepik.com",
              snippet:
                "Manga anime girl Images | Free Vectors, Stock Photos & PSD",
            },
          ],
        };
      } else {
        return {
          nbHits: 100,
          results: [
            {
              kind: "customsearch#result",
              title: "Test.com: Home",
              htmlTitle: "<b>Test</b>.com: Home",
              link: "https://test.com/",
              displayLink: "test.com",
              snippet:
                "An Internet Speed Test A COVID Test A Testing And Certification Platform A Lab Test Location A Virtual Proctoring Solution A Software Testing Job A DNA Test",
              htmlSnippet:
                "An Internet Speed <b>Test</b> A COVID <b>Test</b> A <b>Testing</b> And Certification Platform A Lab <b>Test</b> Location A Virtual Proctoring Solution A Software <b>Testing</b> Job A DNA <b>Test</b>",
              cacheId: "cljxcDX_QB8J",
              formattedUrl: "https://test.com/",
              htmlFormattedUrl: "https://<b>test</b>.com/",
              pagemap: [Object],
            },
            {
              kind: "customsearch#result",
              title: "Mobile-Friendly Test - Google Search Console",
              htmlTitle: "Mobile-Friendly <b>Test</b> - Google Search Console",
              link: "https://search.google.com/test/mobile-friendly",
              displayLink: "search.google.com",
              snippet:
                "test code. About this tool. Test how easily a visitor can use your page on a mobile device. Just enter a page URL to see how your page scores.",
              htmlSnippet:
                "<b>test</b> code. About this tool. <b>Test</b> how easily a visitor can use your page on a mobile device. Just enter a page URL to see how your page scores.",
              cacheId: "J_vGwOd2geIJ",
              formattedUrl: "https://search.google.com/test/mobile-friendly",
              htmlFormattedUrl:
                "https://search.google.com/<b>test</b>/mobile-friendly",
              pagemap: [Object],
            },
            {
              kind: "customsearch#result",
              title: "Test Definition & Meaning - Merriam-Webster",
              htmlTitle:
                "<b>Test</b> Definition &amp; Meaning - Merriam-Webster",
              link: "https://www.merriam-webster.com/dictionary/test",
              displayLink: "www.merriam-webster.com",
              snippet:
                "1 of 5. noun (1) · ˈtest. 1. a. : a means of testing: such as · 2 of 5. verb. tested; testing; tests. transitive verb. 1 · 3 of 5. adjective. 1. : of, relating to ...",
              htmlSnippet:
                "1 of 5. noun (1) &middot; <b>ˈtest</b>. 1. a. : a means of <b>testing</b>: such as &middot; 2 of 5. verb. tested; <b>testing</b>; <b>tests</b>. transitive verb. 1 &middot; 3 of 5. adjective. 1. : of, relating to&nbsp;...",
              cacheId: "TGnEwn1_tb0J",
              formattedUrl: "https://www.merriam-webster.com/dictionary/test",
              htmlFormattedUrl:
                "https://www.merriam-webster.com/dictionary/<b>test</b>",
              pagemap: [Object],
            },
            {
              kind: "customsearch#result",
              title:
                "America's Test Kitchen | Episodes, Recipes & Reviews | America's ...",
              htmlTitle:
                "America&#39;s <b>Test</b> Kitchen | Episodes, Recipes &amp; Reviews | America&#39;s ...",
              link: "https://www.americastestkitchen.com/",
              displayLink: "www.americastestkitchen.com",
              snippet:
                "Watch every episode from every season and find the best recipes, equipment reviews, taste tests, and cooking videos for home cooks.",
              htmlSnippet:
                "Watch every episode from every season and find the best recipes, equipment reviews, taste <b>tests</b>, and cooking videos for home cooks.",
              cacheId: "dSOkzGI8vY8J",
              formattedUrl: "https://www.americastestkitchen.com/",
              htmlFormattedUrl: "https://www.americas<b>test</b>kitchen.com/",
              pagemap: [Object],
            },
            {
              kind: "customsearch#result",
              title: "Test - Wikipedia",
              htmlTitle: "<b>Test</b> - Wikipedia",
              link: "https://en.wikipedia.org/wiki/Test",
              displayLink: "en.wikipedia.org",
              snippet:
                "Test (assessment), an educational assessment intended to measure the respondents' knowledge or other abilities ...",
              htmlSnippet:
                "<b>Test</b> (assessment), an educational assessment intended to measure the respondents&#39; knowledge or other abilities&nbsp;...",
              cacheId: "R94CAo00wOYJ",
              formattedUrl: "https://en.wikipedia.org/wiki/Test",
              htmlFormattedUrl: "https://en.wikipedia.org/wiki/<b>Test</b>",
              pagemap: [Object],
            },
            {
              kind: "customsearch#result",
              title: "Join a Test Meeting - Zoom",
              htmlTitle: "Join a <b>Test</b> Meeting - Zoom",
              link: "https://zoom.us/test",
              displayLink: "zoom.us",
              snippet:
                "Zoom is the leader in modern enterprise video communications, with an easy, reliable cloud platform for video and audio conferencing, chat, and webinars ...",
              htmlSnippet:
                "Zoom is the leader in modern enterprise video communications, with an easy, reliable cloud platform for video and audio conferencing, chat, and webinars&nbsp;...",
              cacheId: "Jsk355JURfkJ",
              formattedUrl: "https://zoom.us/test",
              htmlFormattedUrl: "https://zoom.us/<b>test</b>",
              pagemap: [Object],
            },
            {
              kind: "customsearch#result",
              title: "COVID-19 Testing: What You Need to Know | CDC",
              htmlTitle: "COVID-19 <b>Testing</b>: What You Need to Know | CDC",
              link: "https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/testing.html",
              displayLink: "www.cdc.gov",
              snippet:
                "These tests detect viral genetic material, which may stay in your body for up to 90 days after you test positive. Therefore, you should not use a NAAT if you ...",
              htmlSnippet:
                "These <b>tests</b> detect viral genetic material, which may stay in your body for up to 90 days after you <b>test</b> positive. Therefore, you should not use a NAAT if you&nbsp;...",
              cacheId: "jV_-IW4ip-0J",
              formattedUrl:
                "https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/testing.html",
              htmlFormattedUrl:
                "https://www.cdc.gov/coronavirus/2019-ncov/symptoms-<b>testing</b>/<b>testing</b>.html",
              pagemap: [Object],
            },
            {
              kind: "customsearch#result",
              title: "Speedtest by Ookla - The Global Broadband Speed Test",
              htmlTitle:
                "Speedtest by Ookla - The Global Broadband Speed <b>Test</b>",
              link: "https://www.speedtest.net/",
              displayLink: "www.speedtest.net",
              snippet:
                "Use Speedtest on all your devices with our free desktop and mobile apps.",
              htmlSnippet:
                "Use Speedtest on all your devices with our free desktop and mobile apps.",
              cacheId: "5RD1THTfC6wJ",
              formattedUrl: "https://www.speedtest.net/",
              htmlFormattedUrl: "https://www.speed<b>test</b>.net/",
              pagemap: [Object],
            },
            {
              kind: "customsearch#result",
              title: "test - Wiktionary",
              htmlTitle: "<b>test</b> - Wiktionary",
              link: "https://en.wiktionary.org/wiki/test",
              displayLink: "en.wiktionary.org",
              snippet:
                "VerbEdit · To challenge. · To refine (gold, silver, etc.) · To put to the proof; to prove the truth, genuineness, or quality of by experiment, or by some principle ...",
              htmlSnippet:
                "VerbEdit &middot; To challenge. &middot; To refine (gold, silver, etc.) &middot; To put to the proof; to prove the truth, genuineness, or quality of by experiment, or by some principle&nbsp;...",
              cacheId: "MOAdxo6g5IgJ",
              formattedUrl: "https://en.wiktionary.org/wiki/test",
              htmlFormattedUrl: "https://en.wiktionary.org/wiki/<b>test</b>",
              pagemap: [Object],
            },
            {
              kind: "customsearch#result",
              title: "Take a Test",
              htmlTitle: "Take a <b>Test</b>",
              link: "https://app-prod-03.implicit.harvard.edu/implicit/takeatest.html",
              displayLink: "app-prod-03.implicit.harvard.edu",
              snippet:
                "Preliminary Information. On the next page you'll be asked to select an Implicit Association Test (IAT) from a list of possible topics .",
              htmlSnippet:
                "Preliminary Information. On the next page you&#39;ll be asked to select an Implicit Association <b>Test</b> (IAT) from a list of possible topics .",
              cacheId: "P1uu1fUlS4sJ",
              formattedUrl:
                "https://app-prod-03.implicit.harvard.edu/implicit/takeatest.html",
              htmlFormattedUrl:
                "https://app-prod-03.implicit.harvard.edu/implicit/takea<b>test</b>.html",
              pagemap: [Object],
            },
          ],
        };
      }
    },
  },
};

export { resolvers };
