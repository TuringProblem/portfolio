import { FC } from 'react';
import { BaseCard } from '../base';
import { Header } from '../header';
import { Sizes } from '../header/types';
import { grabTextAndPaddingSizes } from '../../../utils';



export interface TextFieldCardProps {
  position: string;
  size?: Sizes;
  title?: string;
}

/**
 * @author { @Override }
 * @since 02012026
 * @see <a href="https://github.com/TuringProblem">Github Profile</a>
 **/
export const TextFieldCard: FC<TextFieldCardProps> = ({ position, size, title }) => {
  return (
    <div>
      <Header title={title || "Text Field"} size={size || "md"} position={position} />
      <BaseCard className={`flex flex-col gap-[16px] bg-[var(--about-card-background)] border border-transparent hover:border-[var(--ifm-color-primary)] hover:cursor-pointer p-[8px] focus-within:border-[var(--ifm-color-primary)]`}>
        {title === "Message" ? (
          <input type="text" placeholder="Enter your text here" className="w-full h-[500px] bg-transparent border-none outline-none resize-none" />
        ) : (
          <input type="text" placeholder="Enter your text here" className="w-full h-full bg-transparent border-none outline-none" />
        )}
      </BaseCard>
    </div>
  );
}
