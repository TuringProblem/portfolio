import githubImage from '@site/static/img/github.png';

/**
 * Author/{ @Override }: Since -> 20260307 | @13:44
 **/

export const GithubContent = () => (
  <>
    <div className="flex flex-col gap-[16px] items-center">
      <img src="https://komarev.com/ghpvc/?username=turingproblem&label=Profile%20views&color=0e75b6&style=flat" alt="turingproblem" className="w-[100px] object-contain" />
      <img src={githubImage} onClick={() => window.open("https://github.com/TuringProblem/")} alt="Github Profile" className="hover:cursor-pointer relative" />
    </div>
  </>
);
