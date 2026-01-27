import { philosophyListProps } from "./philosophy.interface";




export const defaultSideText = () => (
  <>
    <div className="w-[50%] bg-[var(--philosophy-card-background)] rounded-[8px]">
      <p className="pt-[14px]">These are the philosophers I've been reading about.</p>
      To understand this page, here is a little overview on what to do :)
      <div className="flex justify-start">
        Hello
        <img src={require('/Users/andrewwellington/Documents/portfolio/portfolio-docusaurus/static/img/example.png').default} alt="example" className="w-[50%] h-[50%]" />
      </div>
    </div>
  </>
);

export const values: philosophyListProps[] = [
  {
    philosopher: "Ludwig Wittgenstein",
    link: "https://en.wikipedia.org/wiki/Ludwig_Wittgenstein",
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Ludwig_Wittgenstein_1929.jpg/500px-Ludwig_Wittgenstein_1929.jpg",
    quote: '"The limits of my language mean the limits of my world."',
    description: (
      <>
        <div className="w-[50%] bg-[var(--philosophy-card-background)] rounded-[8px]">
          <p>Ludwig Wittgenstein</p>
        </div>
      </>
    )
  },
  {
    philosopher: "René Descartes",
    link: "https://en.wikipedia.org/wiki/Ren%C3%A9_Descartes",
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/500px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg",
    quote: '"I think, therefore I am."',
    description: (
      <>
        <div className="w-[50%] bg-[var(--philosophy-card-background)] rounded-[8px]">
          <p>René Descartes</p>
        </div>
      </>
    )
  },
  {
    philosopher: "Frederick Nietzsche",
    link: "https://en.wikipedia.org/wiki/Friedrich_Nietzsche",
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche187a.jpg/500px-Nietzsche187a.jpg",
    quote: '"That which does not kill us, makes us stronger"',
    description: (
      <>
        <div className="w-[50%] bg-[var(--philosophy-card-background)] rounded-[8px]">
          <p>Friedrich Nietzsche</p>
        </div>
      </>
    )
  },
  {
    philosopher: "Plato",
    link: "https://en.wikipedia.org/wiki/Plato",
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Plato_Silanion_Musei_Capitolini_MC1377.png/500px-Plato_Silanion_Musei_Capitolini_MC1377.png",
    quote: '"An unexamined life is not worth living."',
    description: (
      <>
        <div className="w-[50%] bg-[var(--philosophy-card-background)] rounded-[8px]">
          <p>Plato</p>
        </div>
      </>
    )
  },
  {
    philosopher: "Immanuel Kant",
    link: "https://en.wikipedia.org/wiki/Immanuel_Kant",
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Immanuel_Kant_-_Gemaelde_1.jpg/500px-Immanuel_Kant_-_Gemaelde_1.jpg",
    quote: '"He who is cruel to animals becomes hard also in his dealings with men."',
    description: (
      <>
        <div className="w-[50%] bg-[var(--philosophy-card-background)] rounded-[8px]">
          <p>Immanuel Kant</p>
        </div>
      </>
    )
  },
  {
    philosopher: "Epictetus",
    link: "https://en.wikipedia.org/wiki/Epictetus",
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Epicteti_Enchiridion_Latinis_versibus_adumbratum_%28Oxford_1715%29_frontispiece.jpg/500px-Epicteti_Enchiridion_Latinis_versibus_adumbratum_%28Oxford_1715%29_frontispiece.jpg",
    quote: '"The only thing that is constant is change."',
    description: (
      <>
        <div className="w-[50%] bg-[var(--philosophy-card-background)] rounded-[8px]">
          <p>Epictetus</p>
        </div>
      </>
    )
  },
  {
    philosopher: "Alan Turing",
    link: "https://en.wikipedia.org/wiki/Alan_Turing",
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Alan_turing_header.jpg/500px-Alan_turing_header.jpg",
    quote: '"It is the people who no one imagined anything of who do the things no one can imagine"',
    description: (
      <>
        <div className="w-[50%] bg-[var(--philosophy-card-background)] rounded-[8px]">
          <p>Alan Turing</p>
        </div>
      </>

    )
  },
  {
    philosopher: "Kurt Gödel",
    link: "https://en.wikipedia.org/wiki/Kurt_G%C3%B6del",
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/4/42/Kurt_g%C3%B6del.jpg",
    quote: '"Either mathematics is too big for the human mind, or the human mind is more than a machine."',
    description: (
      <>
        <div className="w-[50%] bg-[var(--philosophy-card-background)] rounded-[8px]">
          <p>Kurt Gödel</p>
        </div>
      </>
    )
  }
]
