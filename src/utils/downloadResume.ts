/**
 * @author { @Override }
 * @since 02012026
 * @see <a href="github.com/TuringProble">Github Profile</a>
 **/

const downloadResume = async (resumeImageUrl: string) => {
  try {
    const response = await fetch(resumeImageUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link: HTMLAnchorElement = document.createElement('a');
    link.href = url;
    link.download = 'resume.png';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Failed to download resume:', error);
  }
};

export { downloadResume };
