import { BASE } from "../../shared/base";
import { TRUE, STUpper } from "../../shared/utils.const";

/**
 * Author/{ @Override }: Since -> 20260306 | @19:05
 **/

const CONTACT = 'contact';

export const CONTACT_DATA = {
  ...BASE,
  layoutTitle: STUpper(TRUE, CONTACT),
  layoutDescription: `Andrew\'s ${STUpper(TRUE, CONTACT)}`,
  navigationActiveRoute: CONTACT,
  locationRef: CONTACT,
  contentKey: CONTACT,
}
