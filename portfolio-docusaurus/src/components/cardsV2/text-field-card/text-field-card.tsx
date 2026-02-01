import { FC } from 'react';
import { BaseCard } from '../base';
import { Header } from '../header';

export const TextFieldCard: FC = () => {
  return (
    <div>
      <Header title="Text Field" size="md" />
      <BaseCard className="flex flex-col gap-[16px] bg-[var(--about-card-background)] border border-transparent hover:border-[var(--ifm-color-primary)] shadow-[0px_0.5px_1px_0px] hover:shadow-[0px_0.5px_1px_0px] hover:cursor-pointer">
        hello
      </BaseCard>
    </div>
  );
}
