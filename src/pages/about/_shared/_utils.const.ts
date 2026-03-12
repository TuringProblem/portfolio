const TRUE = 1;
const FALSE = 0;
const RESUME_URL = '/img/resume.png';

// stupper = Send to Upper Case
const STUpper = (val: number, str: string): string => val === TRUE ? str[0].toUpperCase() + str.slice(1) : str;

export {
  TRUE,
  FALSE,
  RESUME_URL,
  STUpper
};
