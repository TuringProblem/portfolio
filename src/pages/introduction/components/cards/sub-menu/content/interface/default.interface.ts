export type ImageSource = "java" | "typescript" | "python";

export interface ImageWithLinkProps {
  image_source: ImageSource;
  image_custom?: string;
  href: string;
  width?: number;
  height?: number;
}
