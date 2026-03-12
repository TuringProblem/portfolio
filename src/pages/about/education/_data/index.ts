import { BASE } from "../../_shared/_base";
import { TRUE, STUpper } from "../../_shared/_utils.const";

/**
 * Author/{ @Override }: Since -> 20260306 | @19:05
 **/

const EDUCATION = 'education';

export const EDUCATION_DATA = {
  ...BASE,
  layoutTitle: STUpper(TRUE, EDUCATION),
  layoutDescription: `Andrew\'s ${STUpper(TRUE, EDUCATION)}`,
  navigationActiveRoute: EDUCATION,
  locationRef: EDUCATION,
  contentKey: EDUCATION,
} as const;
