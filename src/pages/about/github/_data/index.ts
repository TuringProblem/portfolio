import { BASE } from "../../_shared/_base";
import { TRUE, STUpper } from "../../_shared/_utils.const";

/**
 * Author/{ @Override }: Since -> 20260306 | @19:05
 **/

const GITHUB = 'github';

export const GITHUB_DATA = {
  ...BASE,
  layoutTitle: STUpper(TRUE, GITHUB),
  layoutDescription: `Andrew\'s ${STUpper(TRUE, GITHUB)}`,
  navigationActiveRoute: GITHUB,
  locationRef: GITHUB,
  contentKey: GITHUB,
} as const;
