import { BASE } from "../../_shared/_base";
import { TRUE, STUpper } from "../../_shared/_utils.const";

/**
 * Author/{ @Override }: Since -> 20260306 | @19:05
 **/

const PROFILE = 'profile';

export const PROFILE_DATA = {
  ...BASE,
  layoutTitle: STUpper(TRUE, PROFILE),
  layoutDescription: `Andrew\'s ${STUpper(TRUE, PROFILE)}`,
  navigationActiveRoute: PROFILE,
  locationRef: PROFILE,
  contentKey: PROFILE,
} as const;
