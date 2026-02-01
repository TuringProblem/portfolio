import { ReactNode } from 'react';

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

interface PhilosophyCardProps {
  philosopherHeader: Philosophers;
  subHeader?: string;
  mainContent?: ReactNode;
  footer?: ReactNode;
}

export { PhilosophersEnum, Philosophers, PhilosophyCardProps };
