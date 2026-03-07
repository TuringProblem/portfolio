import { BASE } from "../../shared/base";
import { TRUE, STUpper } from "../../shared/utils.const";
import { TextFieldCardProps, TextFieldCard } from '@site/src/components/cardsV2';

/**
 * Author/{ @Override }: Since -> 20260306 | @19:05
 **/
export const contentData: TextFieldCardProps[] = [
  {
    position: 'left',
    size: 'md',
    title: 'Subject',
  },
  {
    position: 'center',
    size: 'md',
    title: 'Message',
  },
];


export interface ContactContentProps {
  data: TextFieldCardProps[];
}

const CONTACT = 'contact';

export const CONTACT_DATA = {
  ...BASE,
  layoutTitle: STUpper(TRUE, CONTACT),
  layoutDescription: `Andrew\'s ${STUpper(TRUE, CONTACT)}`,
  navigationActiveRoute: CONTACT,
  locationRef: CONTACT,
  contentKey: CONTACT,
} as const;



