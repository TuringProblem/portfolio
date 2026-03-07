import { BASE } from "../../shared/base";
import { TRUE, STUpper } from "../../shared/utils.const";

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
