import { FC } from 'react';
import type { AboutPageProps } from '../_data';
import { Download } from 'lucide-react';
import { downloadResume } from '../../../utils/downloadResume';

export const HasDownloadButton: FC<AboutPageProps> = ({ sectionData, resumeImageUrl }) => {

  return (
    <>
      {sectionData.hasDownloadButton && (
        <div
          className="flex justify-center mb-[16px]"
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
