import { FC } from 'react';
import { BaseCard } from '../base';
import { Header } from '../header';
import { Sizes } from '../header/types';
import { grabTextAndPaddingSizes } from '../../../utils';



/**
 * @author { @Override }
 * @since 02012026
 * @see <a href="https://github.com/TuringProblem">Github Profile</a>
 **/
export const TextFieldCard: FC<{ position: string, size?: Sizes }> = ({ position, size }) => {
  return (
    <div>
      <Header title="Text Field" size={size || "md"} position={position} />

      <BaseCard className="flex flex-col gap-[16px] bg-[var(--about-card-background)] border border-transparent hover:border-[var(--ifm-color-primary)] shadow-[0px_0.5px_1px_0px] hover:shadow-[0px_0.5px_1px_0px] hover:cursor-pointer">
        <input type="text" placeholder="Enter your text here" className="w-full h-full bg-transparent border-none outline-none" />
      </BaseCard>
    </div>
  );
}
