import { FC } from 'react';
import type { AboutPageProps } from '../../pages/about/_data';
import { Download } from 'lucide-react';
import { downloadResume } from '../../utils/downloadResume';

export const HasDownloadButton: FC<AboutPageProps> = ({ sectionData, resumeImageUrl }) => {

  return (
    <>
      {sectionData.hasDownloadButton && (
        <div
          className="flex justify-center mb-[16px] hover:cursor-pointer hover:text-[var(--ifm-color-primary)]"
          onClick={() => downloadResume(resumeImageUrl)}
          aria-role="button"
          tabIndex={0}
        >
          <Download size={24} />
          Download
        </div>
      )}
    </>
  );
}
