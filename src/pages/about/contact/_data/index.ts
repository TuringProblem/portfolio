import { BASE } from "../../_shared/_base";
import { TRUE, STUpper } from "../../_shared/_utils.const";
import { TextFieldCardProps } from '@site/src/components/cardsV2';

/**
 * Author/{ @Override }: Since -> 20260306 | @19:05
 **/

export interface ContactContentProps {
  data: TextFieldCardProps[];
}

export const contentData: TextFieldCardProps[] = [
  {
    position: 'left',
    size: 'md',
    title: 'Subject',
  },
  {
    position: 'left',
    size: 'md',
    title: 'Message',
  },
];

const CONTACT = 'contact';

export const CONTACT_DATA = {
  ...BASE,
  layoutTitle: STUpper(TRUE, CONTACT),
  layoutDescription: `Andrew\'s ${STUpper(TRUE, CONTACT)}`,
  navigationActiveRoute: CONTACT,
  locationRef: CONTACT,
  contentKey: CONTACT,
} as const;



