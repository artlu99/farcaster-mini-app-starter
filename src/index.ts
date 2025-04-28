import { Hono } from "hono";

const app = new Hono<{ Bindings: CloudflareBindings }>();

interface Slide {
  id: number;
  order: number;
  imgUrl: string;
  caption: string;
  href: string;
  created_at: string;
}
app.get("/message", (c) => {
  const message = c.env.MY_ENVIRONMENT;
  return c.text(message);
});

app.get("/slides", (c) => {
  const slides: Slide[] = [
    {
      id: 1,
      order: 1000,
      imgUrl:
        "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/52855979-96ac-47ec-2314-658e3124ff00/original",
      caption: "Burroti clanker v0 Nov 2024",
      href: "https://www.clanker.world/clanker/0x097745F2FB83C104543F93E528B455FC3cE392b6",
      created_at: "2025-01-08 18:06:47.48011",
    },
    {
      id: 6,
      order: 3000,
      imgUrl:
        "https://r2.fc-clients-cast-action.artlu.xyz/qr-install-keccak256-composer-action.png",
      caption: "SassyHash 💅 Nov 2024",
      href: "https://sassyhash.artlu.xyz",
      created_at: "2025-01-08 19:09:41.027674",
    },
    {
      id: 2,
      order: 4000,
      imgUrl:
        "https://scontent-iad4-1.choicecdn.com/-/rs:fill:2000:2000/g:ce/f:webp/aHR0cHM6Ly9tYWdpYy5kZWNlbnRyYWxpemVkLWNvbnRlbnQuY29tL2lwZnMvYmFmeWJlaWhtcHJkZmppNW1lZXZmdWpkeTZzeXVubXh4enF5YjJiZzU3a3dzMnN6NndrNXh3Z290b2E",
      caption: "Why did he leave Aug 2024",
      href: "https://artlu.xyz/posts/why-did-he-leave-aug2024/",
      created_at: "2025-01-08 18:06:47.48011",
    },
    {
      id: 3,
      order: 5000,
      imgUrl:
        "https://storage.googleapis.com/papyrus_images/18f6f81b0a294f49ad8de489efe92c0a.jpg",
      caption: "BArt-Head on The BCBH Show Mar~Jul 2024",
      href: "https://client-bcbhshow.artlu.xyz/sponsorship",
      created_at: "2025-01-08 18:06:47.48011",
    },
    {
      id: 9,
      order: 6000,
      imgUrl:
        "https://wrpcd.net/cdn-cgi/imagedelivery/BXluQx4ige9GuW0Ia56BHw/7a7c0ba3-f372-4f20-f7e2-c7b412381500/rectcontain3",
      caption: "Mere King of $Degen 25 Jan 2024",
      href: "https://warpcast.com/artlu/0xa52d0486",
      created_at: "2025-01-08 21:35:58.592285",
    },
    {
      id: 4,
      order: 7000,
      imgUrl: "https://avatars.githubusercontent.com/u/90869437?v=4",
      caption: "Shadowbanned Oct 2023",
      href: "https://artlu.xyz/posts/warpcast-shadowbanned-oct2023/",
      created_at: "2025-01-08 18:06:47.48011",
    },
    {
      id: 27,
      order: 8000,
      imgUrl: "https://farchiver.xyz/assets/viz-Bho1HSrO.gif",
      caption: "Farchiver June 2024",
      href: "https://farchiver.xyz",
      created_at: "2025-01-22 15:33:47.120182",
    },
    {
      id: 28,
      order: 999,
      imgUrl: "https://sassyhash.artlu.xyz/sassyhash-og.png",
      caption: "SassyHash 💅 Contest Mar 2025",
      href: "https://warpcast.com/artlu/0xfabea1ca",
      created_at: "2025-04-03 15:33:47.120182",
    },
    {
      id: 29,
      order: 998,
      imgUrl: "https://picosub.artlu.xyz/og-square.jpg",
      caption: "picosub Apr 2025",
      href: "https://warpcast.com/artlu/0x52b27041",
      created_at: "2025-04-03 15:33:47.120182",
    },
    {
      id: 30,
      order: 997,
      imgUrl: "https://snappa-mini-app.artlu.workers.dev/favicon.png",
      caption: "🐟 Snappa Apr 2025",
      href: "https://warpcast.com/artlu/0x800e94ef",
      created_at: "2025-04-28 02:30:00.000000",
    },
  ];
  return c.json(slides.slice().sort((a, b) => a.order - b.order));
});

export default app;
