import { FC, useState, ReactNode } from 'react';
import { Header } from '../header';
import './education-card-styles.css';

export interface EducationData {
  icon: ReactNode;
  title: string;
  subtitle: string;
  id: string;
  color: string;
  lowerText?: ReactNode;
  img?: string;
}

interface EducationCardProps {
  itemXS: EducationData[];
  hasVideo?: boolean;
}

export const EducationCard: FC<EducationCardProps> = ({ itemXS, hasVideo }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeText, setActiveText] = useState<EducationData['lowerText']>(itemXS[0].lowerText || '');

  const handleOptionClick = (index: number) => {
    setActiveIndex(index);
    setActiveText(itemXS[index].lowerText || '');

    console.log("this is the index ", index);
  };


  return (
    <div className="education-card-wrapper">
      <Header title="Education & Learning" size="lg" position="center" />

      <div className="mainContainer">
        {itemXS.map((item, index) => (
          <div
            key={item.id}
            className={`education-item ${activeIndex === index ? 'active' : ''}`}
            style={{ '--item-color': item.color } as React.CSSProperties}
            onClick={() => handleOptionClick(index)}
          >
            <div className="education-item-content">
              <div className="education-item-inner">
                <div className="education-icon-wrapper">
                  <div className="education-icon">
                    {item.icon} {/*Using Lucide icon*/}
                  </div>
                </div>

                {activeIndex === index && (
                  <div className="education-text">
                    <div className="education-title">
                      {item.title}
                    </div>
                    <div className="education-subtitle">
                      {item.subtitle}
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        ))
        }
      </div >
      {activeText}
    </div >

  );
}
