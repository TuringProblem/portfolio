import { BASE } from "../../_shared/_base";
import { TRUE, STUpper } from "../../_shared/_utils.const";

/**
 * Author/{ @Override }: Since -> 20260306 | @19:05
 **/

const RESUME = 'resume';

export const RESUME_DATA = {
  ...BASE,
  layoutTitle: STUpper(TRUE, RESUME),
  layoutDescription: `Andrew\'s ${STUpper(TRUE, RESUME)}`,
  navigationActiveRoute: RESUME,
  locationRef: RESUME,
  contentKey: RESUME,
  isStatic: false,
  hasDownloadButton: true,
} as const;
