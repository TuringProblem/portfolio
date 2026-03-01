import React, { FC } from 'react';
import Layout from '@theme/Layout';
import { BaseCard } from '../../components/cardsV2';
import { getChanges } from '../data';
import { NavigationCard } from '../../components/cardsV2/navigation-card';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { AboutPageProps } from './_data';
import { ShowHomeNavigationComponent } from '../../components/about/show-home-navigation';
import type { GetHeight } from '../types/_types';
import { HasDownloadButton } from '../../components/about/has-download-button';
import { QRCodeSVG } from 'qrcode.react';

import { PrintQRCodeData } from '../../utils/shared-utils';

import '../about.css';

/**
 * @author { @Override }
 * @since 20260203
 * @see <a href="https://github.com/TuringProblem">GitHub Profile</a>
 **/


const LeftNav: FC<AboutPageProps> = ({ sectionData }) => (
  <div>
    <div className="flex flex-col gap-[48px]">
      <NavigationCard activeRoute={sectionData.navigationActiveRoute}>
        <ShowHomeNavigationComponent sectionData={sectionData} />
      </NavigationCard>
      <PrintQRCodeData ref={sectionData.locationRef} qrLink={sectionData.qrLink} />
    </div>
  </div>
);


export const AboutSection: FC<AboutPageProps> = ({ sectionData }) => {
  const resumeImageUrl = useBaseUrl(sectionData.resumeUrl);
  const getHeight: GetHeight = () => typeof window !== 'undefined' ? window.innerHeight : 800;
  const height = `max-h-[${getHeight()}px]`;
  const changes = getChanges(resumeImageUrl);

  return (
    <Layout
      title={sectionData.layoutTitle}
      description={sectionData.layoutDescription}>
      <main className="containedItems">
        <LeftNav sectionData={sectionData} />

        <BaseCard className={`flex-col shadow-xs justify-center items-center p-[24px] bg-[var(--about-card-background)] border border-transparent hover:border-[var(--ifm-color-primary)] shadow-[0px_0.5px_1px_0px] hover:shadow-[0px_0.5px_1px_0px] overflow-auto overscroll-contain w-full ${sectionData.isStatic ? height : 'max-h-[850px]'}`}>
          <HasDownloadButton sectionData={sectionData} resumeImageUrl={resumeImageUrl} />
          <div className="text-center min-h-[700px] overflow-auto">
            {changes[sectionData.contentKey] || changes.default}
          </div>
        </BaseCard>

      </main>
    </Layout >
  );
}
