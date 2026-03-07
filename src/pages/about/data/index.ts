import { AboutPage } from "../shared/interfaces/page-props.interface";
import { EDUCATION_DATA } from "../education/data";
import { GITHUB_DATA } from "../github/data";
import { PROFILE_DATA } from "../profile/data";
import { RESUME_DATA } from "../resume/data";
import { CONTACT_DATA } from "../contact/data";
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

