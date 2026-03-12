import { FC, ReactNode } from 'react';
import { ContactContentProps, contentData } from '@site/src/pages/about/contact/_data';
import { TextFieldCard } from '@site/src/components/cardsV2';

/**
 * Author/{ @Override }: Since -> 20260307 | @13:50
 **/
export const MessageComponent: FC<ContactContentProps> = ({ data }): ReactNode => {
  return (
    <div className="flex flex-col gap-[16px]">
      {data.map((item, index) => (
        <TextFieldCard key={index} position={item.position} title={item.title} />
      ))}
    </div>
  );
};

export const ContactContent = () => (
  <>
    <MessageComponent data={contentData} />
    <div className="flex justify-start p-[16px]">
      <a href="" >link</a>
    </div>
  </>
);
