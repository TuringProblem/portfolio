import React from 'react';
import { philosophyListProps } from "./philosophy.interface";
import { Header } from '../../../components/cardsV2/header';
import { PhilosophyCard } from '../../../components/cardsV2/philosophy-card';
import { PhilosophersEnum, Philosophers, philosophersMainContent } from '../../../components/cardsV2/philosophy-card/types';




export const defaultSideText = () => (
  <>
    <div className="w-[50%] bg-[var(--philosophy-card-background)] rounded-[8px] overflow-auto">
      <p className="pt-[14px]">These are the philosophers I've been reading about.</p>
      To understand this page, here is a little overview on what to do :)
      <div className="rightSideContainer">
        <img src={require('/static/img/example.png').default} alt="example" className="w-[350px] h-[350px]" />
        <code className="p-[24px] bg-transparent border-none">
          Click on the name to see Wikipedia
          <br />
          Click on the Card to see my reason of interest
        </code>
      </div>
    </div>
  </>
);

export const values: philosophyListProps[] = [
  {
    philosopher: PhilosophersEnum.LudwigWittgenstein as Philosophers,
    link: "https://en.wikipedia.org/wiki/Ludwig_Wittgenstein",
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Ludwig_Wittgenstein_1929.jpg/500px-Ludwig_Wittgenstein_1929.jpg",
    quote: '"The limits of my language mean the limits of my world."',
    description: (
      <>
        <div className="w-[50%] bg-[var(--philosophy-card-background)] rounded-[8px]">
          <PhilosophyCard philosopherHeader={PhilosophersEnum.LudwigWittgenstein} mainContent={philosophersMainContent[PhilosophersEnum.LudwigWittgenstein]} />
        </div>
      </>
    )
  },
  {
    philosopher: PhilosophersEnum.ReneDescartes as Philosophers,
    link: "https://en.wikipedia.org/wiki/Ren%C3%A9_Descartes",
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/500px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg",
    quote: '"I think, therefore I am."',
    description: (
      <>
        <div className="w-[50%] bg-[var(--philosophy-card-background)] rounded-[8px]">
          <PhilosophyCard philosopherHeader={PhilosophersEnum.ReneDescartes} mainContent={philosophersMainContent[PhilosophersEnum.ReneDescartes]} />
        </div>
      </>
    )
  },
  {
    philosopher: PhilosophersEnum.FriedrichNietzsche as Philosophers,
    link: "https://en.wikipedia.org/wiki/Friedrich_Nietzsche",
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche187a.jpg/500px-Nietzsche187a.jpg",
    quote: '"That which does not kill us, makes us stronger"',
    description: (
      <>
        <div className="w-[50%] bg-[var(--philosophy-card-background)] rounded-[8px]">
          <PhilosophyCard philosopherHeader={PhilosophersEnum.FriedrichNietzsche} mainContent={philosophersMainContent[PhilosophersEnum.FriedrichNietzsche]} />
        </div>
      </>
    )
  },
  {
    philosopher: PhilosophersEnum.Plato as Philosophers,
    link: "https://en.wikipedia.org/wiki/Plato",
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Plato_Silanion_Musei_Capitolini_MC1377.png/500px-Plato_Silanion_Musei_Capitolini_MC1377.png",
    quote: '"An unexamined life is not worth living."',
    description: (
      <>
        <div className="w-[50%] bg-[var(--philosophy-card-background)] rounded-[8px]">
          <PhilosophyCard philosopherHeader={PhilosophersEnum.Plato} mainContent={philosophersMainContent[PhilosophersEnum.Plato]} />
        </div>
      </>
    )
  },
  {
    philosopher: PhilosophersEnum.ImmanuelKant as Philosophers,
    link: "https://en.wikipedia.org/wiki/Immanuel_Kant",
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Immanuel_Kant_-_Gemaelde_1.jpg/500px-Immanuel_Kant_-_Gemaelde_1.jpg",
    quote: '"He who is cruel to animals becomes hard also in his dealings with men."',
    description: (
      <>
        <div className="w-[50%] bg-[var(--philosophy-card-background)] rounded-[8px]">
          <PhilosophyCard philosopherHeader={PhilosophersEnum.ImmanuelKant} mainContent={philosophersMainContent[PhilosophersEnum.ImmanuelKant]} />
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
          <PhilosophyCard philosopherHeader={PhilosophersEnum.Epictetus} mainContent={philosophersMainContent[PhilosophersEnum.Epictetus]} />
        </div>
      </>
    )
  },
  {
    philosopher: PhilosophersEnum.AlanTuring as Philosophers,
    link: "https://en.wikipedia.org/wiki/Alan_Turing",
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Alan_turing_header.jpg/500px-Alan_turing_header.jpg",
    quote: '"It is the people who no one imagined anything of who do the things no one can imagine"',
    description: (
      <>
        <div className="w-[50%] bg-[var(--philosophy-card-background)] rounded-[8px] overflow-auto overscroll-contain">
          <PhilosophyCard philosopherHeader={PhilosophersEnum.AlanTuring} mainContent={philosophersMainContent[PhilosophersEnum.AlanTuring]} />
        </div>
      </>
    )
  },
  {
    philosopher: PhilosophersEnum.KurtGoedel as Philosophers,
    link: "https://en.wikipedia.org/wiki/Kurt_G%C3%B6del",
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/4/42/Kurt_g%C3%B6del.jpg",
    quote: '"Either mathematics is too big for the human mind, or the human mind is more than a machine."',
    description: (
      <>
        <div className="w-[50%] bg-[var(--philosophy-card-background)] rounded-[8px]">
          <PhilosophyCard philosopherHeader={PhilosophersEnum.KurtGoedel} subHeader="this is a sub header" mainContent={philosophersMainContent[PhilosophersEnum.KurtGoedel]} />
        </div>
      </>
    )
  }
]

export default function PhilosophyDataPage() {
  return React.createElement('div', null, 'This is not a page - just philosophy data');
}
