import { createFileRoute } from "@tanstack/react-router";
import heroAcai from "@/assets/hero-acai.jpg";
import matchaImg from "@/assets/matcha.jpg";
import puddingImg from "@/assets/banana-pudding.jpg";
import cookiesImg from "@/assets/cookies.jpg";
import sayaLogo from "@/assets/saya-logo.png.asset.json";
import itemByoBowl from "@/assets/item-byo-bowl.jpg";
import itemClassicBowl from "@/assets/item-classic-bowl.jpg";
import itemTogoCup from "@/assets/item-togo-cup.jpg";
import itemIcedMatcha from "@/assets/item-iced-matcha.jpg";
import itemStrawberryMatcha from "@/assets/item-strawberry-matcha.jpg";
import itemVanillaMatcha from "@/assets/item-vanilla-matcha.jpg";
import itemBananaPudding from "@/assets/item-banana-pudding.jpg";
import itemDawaBox from "@/assets/item-dawa-box.jpg";
import itemChocChunk from "@/assets/item-choc-chunk.jpg";
import itemBiscoffSmores from "@/assets/item-biscoff-smores.jpg";
import itemNutellaCookie from "@/assets/item-nutella-cookie.jpg";
import itemDubaiBrownie from "@/assets/item-dubai-brownie.jpg";
import itemNyRoll from "@/assets/item-ny-roll.jpg";
import itemPainSuisse from "@/assets/item-pain-suisse.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SAYA Açaí — Brazilian Açaí Bowls & Ceremonial Matcha in Accra" },
      {
        name: "description",
        content:
          "SAYA Açaí serves authentic Brazilian açaí bowls, ceremonial grade matcha lattes, banana pudding and NYC-style cookies in Accra. Rated 4.4★ on Google.",
      },
      { property: "og:title", content: "SAYA Açaí — Accra's Home of Açaí & Matcha" },
      {
        property: "og:description",
        content: "Authentic Brazilian açaí bowls and ceremonial grade matcha, made fresh in Accra.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroAcai },
      { name: "twitter:image", content: heroAcai },
    ],
  }),
  component: Index,
});

const PHONE = "054 485 3825";
const TEL = "+233544853825";
const ADDRESS = "222 Swaniker St, Accra";
const MAPS = "https://www.google.com/maps/search/?api=1&query=SAYA+Acai+222+Swaniker+St+Accra";
const INSTAGRAM = "https://www.instagram.com/sayaacai_/";

const menu = [
  {
    name: "Açaí Bowls",
    tag: "Vegan",
    img: heroAcai,
    desc: "Authentic Brazilian açaí bowls, blended thick and topped with fresh fruit, granola and your favourite extras.",
    items: [
      { n: "Build Your Own Bowl", d: "Pure açaí base, choose your toppings.", img: itemByoBowl },
      { n: "Classic Açaí Bowl", d: "Açaí topped with banana, mango, granola & coconut.", img: itemClassicBowl },
      { n: "Açaí To-Go Cup", d: "Brazilian-style açaí, blended thick for the road.", img: itemTogoCup },
    ],
  },
  {
    name: "Ceremonial Grade Matcha",
    tag: "Vegetarian",
    img: matchaImg,
    desc: "Authentic Japanese ceremonial grade matcha, whisked fresh and served over ice.",
    items: [
      { n: "Iced Matcha Latte", d: "Smooth, creamy ceremonial matcha over ice.", img: itemIcedMatcha },
      { n: "Strawberry Matcha", d: "Layered matcha with real strawberry purée.", img: itemStrawberryMatcha },
      { n: "Vanilla Matcha", d: "Sweet, mellow house specialty.", img: itemVanillaMatcha },
    ],
  },
  {
    name: "Banana Pudding",
    tag: "Vegetarian",
    img: puddingImg,
    desc: "Creamy, rich banana pudding layered with vanilla wafers and fresh banana.",
    items: [
      { n: "Classic Banana Pudding", d: "Silky vanilla custard, wafers & banana.", img: itemBananaPudding },
      { n: "Luxury Dawa Box", d: "Dessert box with banana pudding & extras.", img: itemDawaBox },
    ],
  },
  {
    name: "NYC-Style Cookies",
    tag: "Flavors of the week",
    img: cookiesImg,
    desc: "Gooey, moist NYC-style cookies with rotating weekly flavors.",
    items: [
      { n: "Signature Chocolate Chunk", d: "The classic — loaded with chocolate chunks.", img: itemChocChunk },
      { n: "White Chocolate Biscoff S'mores", d: "Biscoff, white chocolate & toasted marshmallow.", img: itemBiscoffSmores },
      { n: "Nutella Stuffed Ferrero Rocher", d: "Molten Nutella centre, hazelnut crunch.", img: itemNutellaCookie },
      { n: "Dubai Chocolate Brownie", d: "Pistachio & kataifi inspired chocolate cookie.", img: itemDubaiBrownie },
    ],
  },
  {
    name: "New Menu & Bakes",
    tag: "Just added",
    img: puddingImg,
    desc: "Fresh additions to the SAYA menu, made with love and baked daily.",
    items: [
      { n: "Nutella New York Roll", d: "Flaky New York roll filled with Nutella.", img: itemNyRoll },
      { n: "Spinach & Feta Pain Suisse", d: "Savoury, buttery laminated pastry.", img: itemPainSuisse },
      { n: "Banana Pudding", d: "Creamy, rich banana pudding with vanilla wafers.", img: itemBananaPudding },
    ],
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={sayaLogo.url}
              alt="SAYA Açaí logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="font-display text-2xl font-bold tracking-[0.25em] text-acai">SAYA</span>
          </a>
          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#menu" className="transition-colors hover:text-acai">Menu</a>
            <a href="#about" className="transition-colors hover:text-acai">About</a>
            <a href="#visit" className="transition-colors hover:text-acai">Visit</a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-acai">Instagram</a>
          </nav>
          <a
            href={`tel:${TEL}`}
            className="rounded-full bg-acai px-5 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-105"
          >
            Order Now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
              ★ 4.4 · 494 Google reviews
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Açaí & matcha,
              <span className="block text-acai">made fresh in Accra.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Authentic Brazilian açaí bowls, ceremonial grade matcha lattes, banana pudding and
              gooey NYC-style cookies. Wholesome ingredients, big flavour.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#menu"
                className="rounded-full bg-acai px-7 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-105"
              >
                Explore the menu
              </a>
              <a
                href={MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-card px-7 py-3 font-semibold transition-colors hover:bg-muted"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-secondary/60 blur-2xl" />
            <img
              src={heroAcai}
              alt="Brazilian açaí bowl topped with banana, granola and fresh berries"
              width={1024}
              height={1536}
              className="mx-auto w-full max-w-sm rounded-[2rem] object-cover shadow-[var(--shadow-soft)]"
            />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-12 sm:grid-cols-3">
          {[
            ["Vegan-friendly", "Plant-based açaí bowls everyone can enjoy."],
            ["Ceremonial grade", "Real Japanese matcha, whisked to order."],
            ["Baked fresh daily", "NYC-style cookies & pastries every morning."],
          ].map(([t, d]) => (
            <div key={t} className="text-center sm:text-left">
              <h3 className="font-display text-xl font-semibold text-acai">{t}</h3>
              <p className="mt-1 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="mx-auto max-w-6xl px-5 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Our Menu</p>
          <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">Made to make you smile</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Price per person GH₵50–250. Dine in or grab & go.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {menu.map((cat, i) => (
            <div
              key={cat.name}
              className={`grid items-center gap-8 md:grid-cols-2 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)]">
                <img
                  src={cat.img}
                  alt={cat.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-3xl font-bold">{cat.name}</h3>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                    {cat.tag}
                  </span>
                </div>
                <p className="mt-3 text-muted-foreground">{cat.desc}</p>
                <ul className="mt-5 space-y-3">
                  {cat.items.map((it) => (
                    <li key={it.n} className="flex items-center gap-4 border-b border-border/60 pb-3">
                      <img
                        src={it.img}
                        alt={it.n}
                        loading="lazy"
                        width={512}
                        height={512}
                        className="h-16 w-16 flex-shrink-0 rounded-xl object-cover shadow-[var(--shadow-soft)]"
                      />
                      <div>
                        <p className="font-semibold">{it.n}</p>
                        <p className="text-sm text-muted-foreground">{it.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-acai-deep text-cream">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center">
          <h2 className="font-display text-4xl font-bold md:text-5xl">A little taste of joy</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-cream/80">
            SAYA Açaí brings together the best of Brazil and Japan — thick, wholesome açaí bowls and
            silky ceremonial grade matcha — right here in Accra. Everything is made fresh with real
            fruit and quality ingredients, so every cup and bowl tastes as good as it looks.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-10 font-display">
            <div>
              <p className="text-4xl font-bold">4.4★</p>
              <p className="text-sm text-cream/70">Google rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold">494+</p>
              <p className="text-sm text-cream/70">Happy reviews</p>
            </div>
            <div>
              <p className="text-4xl font-bold">100%</p>
              <p className="text-sm text-cream/70">Made fresh</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Visit us</p>
            <h2 className="mt-2 font-display text-4xl font-bold">Come say hello</h2>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="font-semibold">Address</dt>
                <dd className="text-muted-foreground">{ADDRESS}</dd>
              </div>
              <div>
                <dt className="font-semibold">Phone</dt>
                <dd>
                  <a href={`tel:${TEL}`} className="text-acai underline-offset-4 hover:underline">
                    {PHONE}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Hours</dt>
                <dd className="text-muted-foreground">
                  Mon–Fri: 7:30 am – 7:00 pm<br />
                  Saturday: 8:00 am – 8:00 pm
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Instagram</dt>
                <dd>
                  <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-acai underline-offset-4 hover:underline">
                    @sayaacai_
                  </a>
                </dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-acai px-6 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-105"
              >
                Get directions
              </a>
              <a
                href={`tel:${TEL}`}
                className="rounded-full border border-border bg-card px-6 py-3 font-semibold transition-colors hover:bg-muted"
              >
                Call to order
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-soft)]">
            <iframe
              title="SAYA Açaí location map"
              src="https://www.google.com/maps?q=222%20Swaniker%20St%2C%20Accra&output=embed"
              className="h-full min-h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 sm:flex-row">
          <div className="flex items-center gap-3">
            <img src={sayaLogo.url} alt="SAYA Açaí logo" width={36} height={36} className="h-9 w-9 rounded-full object-cover" />
            <p className="font-display text-xl font-bold tracking-[0.25em] text-acai">SAYA</p>
          </div>
          <p className="text-sm text-muted-foreground">
            {ADDRESS} · {PHONE}
          </p>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} SAYA Açaí</p>
        </div>
      </footer>
    </div>
  );
}
