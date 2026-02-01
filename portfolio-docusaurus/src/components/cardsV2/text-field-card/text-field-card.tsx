import { FC } from 'react';
import { BaseCard } from '../base';
import { Header } from '../header';

/**
 * @author { @Override }
 * @since 02012026
 * @see <a href="https://github.com/TuringProblem">Github Profile</a>
 **/
export const TextFieldCard: FC<{ position: string }> = ({ position }) => {
  return (
    <div>
      <Header title="Text Field" size="md" position={position} />
      <BaseCard className="flex flex-col gap-[16px] bg-[var(--about-card-background)] border border-transparent hover:border-[var(--ifm-color-primary)] shadow-[0px_0.5px_1px_0px] hover:shadow-[0px_0.5px_1px_0px] hover:cursor-pointer">
        hello
      </BaseCard>
    </div>
  );
}
