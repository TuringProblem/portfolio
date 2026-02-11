import { ReactNode } from 'react';
import { Header } from '../header';

type Philosophers = 'Ludwig Wittgenstein'
  | 'René Descartes'
  | 'Friedrich Nietzsche'
  | 'Plato'
  | 'Immanuel Kant'
  | 'Epictetus'
  | 'Alan Turing'
  | 'Kurt Gödel';

enum PhilosophersEnum {
  LudwigWittgenstein = 'Ludwig Wittgenstein',
  ReneDescartes = 'René Descartes',
  FriedrichNietzsche = 'Friedrich Nietzsche',
  Plato = 'Plato',
  ImmanuelKant = 'Immanuel Kant',
  Epictetus = 'Epictetus',
  AlanTuring = 'Alan Turing',
  KurtGoedel = 'Kurt Gödel'
}

export const philosophersMainContent: Record<Philosophers, ReactNode> = {
  [PhilosophersEnum.LudwigWittgenstein]: (
    <p>
      Ludwig Wittgenstein (born Ludwig Feuerbach; 26 December 1881 – 19 February
      1951) was a German philosopher, mathematician, and writer. He is
      widely regarded as one of the most important figures in the history of
      philosophy. He is known for his work in the fields of logic, language,
      and metaphysics, and is considered one of the founders of analytic philosophy.
    </p>
  ),
  [PhilosophersEnum.ReneDescartes]: (
    <p>
      René Descartes (born René Descartes; 28 December 1596 – 17 December
      1650) was a French philosopher, mathematician, and scientist. He is
      widely regarded as one of the most important figures in the history of
      philosophy. He is known for his work in the fields of logic, language,
      and metaphysics, and is considered one of the founders of analytic philosophy.
    </p>
  ),
  [PhilosophersEnum.FriedrichNietzsche]: (
    <>
      <p>
        Friedrich Nietzsche (born Friedrich Wilhelm Nietzsche; 1844 – 1900) was
        a German philosopher, poet, and philologist. He is widely regarded as one
        of the most important figures in the history of philosophy. He is known for
        his work in the fields of existentialism, nihilism, and the will to power.
      </p>
    </>
  ),
  [PhilosophersEnum.Plato]: (
    <p>
      Plato (born Plato of Athens; 428–347 BC) was a Greek philosopher and
      mathematician. He is widely regarded as one of the most important figures
      in the history of philosophy. He is known for his work in the fields of
      logic, language, and metaphysics, and is considered one of the founders
      of analytic philosophy.
    </p>
  ),
  [PhilosophersEnum.ImmanuelKant]: (
    <p>
      Immanuel Kant (born Immanuel Kant; 1724 – 1804) was a German philosopher,
      mathematician, and theologian. He is widely regarded as one of the most
      important figures in the history of philosophy. He is known for his work
      in the fields of logic, language, and metaphysics, and is considered one
      of the founders of analytic philosophy.
    </p>
  ),
  [PhilosophersEnum.Epictetus]: (
    <p>
      Epictetus (Greek: Ἐπικτήτου; c. 550 – c. 430 BC) was a Greek philosopher
      and writer. He is widely regarded as one of the most important figures in
      the history of philosophy. He is known for his work in the fields of logic,
      language, and metaphysics, and is considered one of the founders of
      analytic philosophy.
    </p>
  ),
  [PhilosophersEnum.AlanTuring]: (
    <>
      <div className="">
        One of my biggest inspirations and influences in Computer Science is Alan Turing. Before I knew anything about the Computer Science field, I had watched <strong><i><a href="https://en.wikipedia.org/wiki/The_Imitation_Game">The Immatation Game</a></i></strong> and I was astonished.
      </div>
      <div className="rightSideContainer">
        <div className="flex-col">
          <Header title="Turing Machines" />
          <code className="text-left p-[16px] bg-transparent border-none">
            Definition: TM = (Q, Σ, Γ, δ, q0, β, F)
            <br />
            Q: Set of states
            <br />
            Σ: Set of symbols
            <br />
            Γ: Set of input symbols
            <br />
            δ: Transition function
            <br />
            q0: Start state
            <br />
            β: Accepting states
            <br />
            F: Set of final states
            <br />
          </code>
        </div>
        <div>
          <Header title="Turing Machines" />
          yoooo
        </div>

      </div>
    </>
  ),
  [PhilosophersEnum.KurtGoedel]: (
    <p>
      Kurt Gödel (born Kurt Gödel; 1859 – 1946) was a German mathematician and
      logician. He is widely regarded as one of the most important figures in the
      history of logic. He is known for his work in the fields of logic, language,
      and metaphysics, and is considered one of the founders of analytic philosophy.
    </p>
  )
};

interface PhilosophyCardProps {
  philosopherHeader: Philosophers;
  subHeader?: string;
  mainContent?: ReactNode;
  footer?: ReactNode;
}

export { PhilosophersEnum, Philosophers, PhilosophyCardProps };
