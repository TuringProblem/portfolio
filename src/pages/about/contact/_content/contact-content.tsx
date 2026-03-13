import { FC, ReactNode } from 'react';
import { ContactContentProps, contentData } from '@site/src/pages/about/contact/_data';
import { TextFieldCard } from '@site/src/components/cardsV2';
import { UserRoundPen } from 'lucide-react';

/**
 * Author/{ @Override }: Since -> 20260307 | @13:50
 **/


/**
 * MessageComponent: FC<ContactContentProps> -- 
 * --> Maps the data {@see ContactContentProps} to the {@see TextFieldCard} component since logic is similiar
 *  > We can compose the data
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

/**
 * ContactContent: FC -> returns the main screen that you see for /about/contact
 *
 * @see contentData: TextFieldCardProps[] -> handles things like, header position, size, and title
 * > Also contains the contant data (given right? lol)
 *
 * @see MessageComponent: FC<ContactContentProps> above
 **/
export const ContactContent = () => (
  <>
    <MessageComponent data={contentData} />
    <div className="flex justify-start p-[16px]">
      <div className="flex flex-col justify-center items-center align-center gap-[8px] border rounded-[16px] hover:cursor-pointer">
        <UserRoundPen size={24} />
        <p>linkedin</p>
      </div>
    </div>
  </>
);
