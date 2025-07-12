import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

interface LazyImageProps {
  src: StaticImageData;
  alt: string;
  height: number;
  width: number;
  className?: string;
}

export default function LazyImage({ src, alt, height, width, className }: LazyImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  // const isVisible = useIntersectionObserver(imageRef as React.RefObject<HTMLImageElement>, {
  //   rootMargin: "0px 100px",
  // });

  return (
    <Image
      style={{ height: height, width: width }}
      ref={imageRef}
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      placeholder="blur"
    />
  );
}
