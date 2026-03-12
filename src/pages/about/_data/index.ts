import { AboutPage } from "../_shared/_interfaces/_page-props.interface";
import { EDUCATION_DATA } from "../education/_data";
import { GITHUB_DATA } from "../github/_data";
import { PROFILE_DATA } from "../profile/_data";
import { RESUME_DATA } from "../resume/_data/resume-data";
import { CONTACT_DATA } from "../contact/_data";
/**
 * Author/{ @Override }: Since -> 20260306 | @21:40
 **/

export const aboutData: Record<string, AboutPage> = {
  profile: PROFILE_DATA,
  github: GITHUB_DATA,
  education: EDUCATION_DATA,
  contact: CONTACT_DATA,
  resume: RESUME_DATA
} as const;

