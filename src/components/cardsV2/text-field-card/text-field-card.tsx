import { useState, FC } from 'react';
import { BaseCard } from '../base';
import { Header } from '../header';
import { Sizes } from '../header/types';
import { Mail } from 'lucide-react';



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
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');

  const handleEmailClick = () => {
    const email = 'tazizthegreat@gmail.com';
    const storedSubject = localStorage.getItem('emailSubject') || '';
    const sub = encodeURIComponent(storedSubject);
    const body = encodeURIComponent(message);

    window.open(`mailto:${email}?subject=${sub}&body=${body}`);
  }

  return (
    <div>
      <Header title={title || "Text Field"} size={size || "md"} position={position} />
      <BaseCard className={`flex flex-col gap-[16px] bg-[var(--about-card-background)] border border-transparent hover:border-[var(--ifm-color-primary)] hover:cursor-pointer p-[8px] focus-within:border-[var(--ifm-color-primary)]`}>
        {title === "Message" ? (
          <div>
            <textarea placeholder="Enter your text here" className="w-full h-[475px] md:h-[300px] bg-transparent border-none outline-none resize-none" onChange={(e) => setMessage(e.target.value)} value={message} />
            <button className={"bg-transparent border-transparent hover:cursor-pointer hover:text-[var(--ifm-color-primary)]"} onClick={handleEmailClick}><Mail className="m-[4px] hover:cursor-pointer" /></button>
          </div>
        ) : (
          <input type="text" placeholder="Enter your text here" className="w-full h-full bg-transparent border-none outline-none" value={subject} onChange={(e) => {
            setSubject(e.target.value);
            localStorage.setItem('emailSubject', e.target.value);
          }} />
        )}
      </BaseCard>
    </div>
  );
}
