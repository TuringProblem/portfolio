import { FC, useState } from 'react';
import { GraduationCap, Award, BookOpen, Calendar, Flame, Star } from 'lucide-react';

interface EducationData {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  id: string;
  color: string;
}

interface EducationCardProps {
  onClick?: () => void;
}

const educationData: EducationData[] = [
  {
    id: 'degree',
    icon: <GraduationCap size={20} />,
    title: 'Computer Science',
    subtitle: 'Bachelor Degree',
    color: '#ED5565'
  },
  {
    id: 'certification',
    icon: <Award size={20} />,
    title: 'Certifications',
    subtitle: 'Professional Creds',
    color: '#FC6E51'
  },
  {
    id: 'courses',
    icon: <BookOpen size={20} />,
    title: 'Online Learning',
    subtitle: 'Skill Development',
    color: '#FFCE54'
  },
  {
    id: 'projects',
    icon: <Star size={20} />,
    title: 'Projects Built',
    subtitle: 'Practical Experience',
    color: '#2ECC71'
  },
  {
    id: 'timeline',
    icon: <Calendar size={20} />,
    title: 'Academic Path',
    subtitle: 'Education Journey',
    color: '#5D9CEC'
  },
  {
    id: 'achievements',
    icon: <Flame size={20} />,
    title: 'Achievements',
    subtitle: 'Recognition Earned',
    color: '#AC92EC'
  }
];

export const EducationCard: FC<EducationCardProps> = ({ onClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOptionClick = (index: number) => {
    setActiveIndex(index);
    onClick?.();
  };

  return (
    <div style={{ 
      width: '100%', 
      margin: '32px 0', 
      padding: '16px',
      background: 'rgba(255,255,255,0.1)', 
      minHeight: '400px',
      borderRadius: '16px'
    }}>
      <h3 style={{ 
        fontSize: '24px', 
        fontWeight: '600', 
        color: 'white', 
        marginBottom: '24px', 
        textAlign: 'center' 
      }}>
        Education & Learning
      </h3>
      
      <div style={{ 
        display: 'flex', 
        height: '320px', 
        borderRadius: '16px', 
        overflow: 'hidden', 
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        minWidth: '700px',
        width: '100%'
      }}>
        {educationData.map((item, index) => (
          <div
            key={item.id}
            style={{
              position: 'relative',
              cursor: 'pointer',
              transition: 'all 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95)',
              backgroundColor: item.color,
              width: activeIndex === index ? '100%' : '80px',
              flex: activeIndex === index ? '1 1 auto' : '0 0 80px',
            }}
            onClick={() => handleOptionClick(index)}
          >
            <div style={{
              position: 'absolute',
              bottom: activeIndex === index ? '20px' : '10px',
              left: activeIndex === index ? '20px' : '10px',
              transition: 'all 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}>
                  <div style={{ color: item.color }}>
                    {item.icon}
                  </div>
                </div>
                
                {activeIndex === index && (
                  <div style={{ 
                    marginLeft: '10px', 
                    color: '#fff',
                    whiteSpace: 'nowrap'
                  }}>
                    <div style={{
                      fontWeight: 'normal',
                      fontSize: '16px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      transition: 'all 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95)',
                    }}>
                      {item.title}
                    </div>
                    <div style={{
                      fontSize: '13px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      opacity: 0.9,
                      transition: 'all 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95)',
                      transitionDelay: '0.1s',
                    }}>
                      {item.subtitle}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
